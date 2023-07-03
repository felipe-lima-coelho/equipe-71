import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import motivationalPhrases from '../../helpers/mock/motivationalPhrases';
import Swal from 'sweetalert2';
import { Coin, Coins } from '@phosphor-icons/react';
import usersOnOnChampionship from '../../helpers/mock/usersPositionOnChampionship';
import CardUsersOnChampionship from '../../components/CardUsersOnChampionship';

const msgMotivational = () => {
  const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
  return motivationalPhrases[randomIndex];
};

function App() {
  const [isMsgAlreadySent, setIsMsgAlreadySent] = useState(false);
  const [isChampionshipActive, setIsChampionshipActive] = useState(false);
  const [progress, setProgress] = useState(50);

  useEffect(() => {
    const isStorageMsgMotivational = localStorage.getItem('msgAlreadySent');

    if (isStorageMsgMotivational === 'yes') {
      setIsMsgAlreadySent(true);
    }
  }, []);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(prevProgress => prevProgress + 10);
    }
    if (progress >= 100) {
      Swal.fire('Parabéns, você alcançou o seu objetivo nesse mês!')
    }
  };

  const handleSaveResponseOfDay = () => {
    localStorage.setItem('msgAlreadySent', 'yes');
    setIsMsgAlreadySent(true);
  };

  return (
    <div>
      <main className={ styles.mainContainer }>
        <section>
          <div className={ styles.coinsIcons }>
            <Coin size={ 32 } />
            <Coins size={ 32 } />
          </div>
          <div className={ styles.progressBarOuter }>
            <div
              className={ styles.progressBarInner } style={{ width: `${progress}%` }}
            ></div>
          </div>
        </section>

        <button
          className={ styles.championshipBtn }
          onClick={ () => setIsChampionshipActive(!isChampionshipActive) }
        >
          <h2>7ª Posição na 2ª Divisão</h2>
          {
            isChampionshipActive && (
              <div className={ styles.championshipContainerCards }>
              {
                usersOnOnChampionship.map((user) => (
                  <div
                    key={ user.name }
                  >
                    <CardUsersOnChampionship
                      name={ user.name }
                      position={ user.position }
                    />
                  </div>
                ))
              }
            </div>
            )
          }

        </button>
      </main>

      {
        !isMsgAlreadySent && (
          <section>
            <section>
              <h1>Bom dia!</h1>
              <p>{msgMotivational()}</p>
            </section>
            <section>
              <strong>Como você está hoje?</strong>
              <div>
                <label htmlFor="triste">
                  Triste
                  <input type="radio" name="triste" id="triste" />
                </label>
                <label htmlFor="poucoTriste">
                  <input type="radio" name="poucoTriste" id="poucoTriste" />
                </label>
                <label htmlFor="poucoFeliz">
                  <input type="radio" name="poucoFeliz" id="poucoFeliz" />
                </label>
                <label htmlFor="feliz">
                  <input type="radio" name="feliz" id="feliz" />
                  Feliz
                </label>
              </div>
              <button
                onClick={ handleSaveResponseOfDay }
              >
                Enviar
              </button>
            </section>
          </section>
        )
      }
    </div>
  )
}

export default App;
