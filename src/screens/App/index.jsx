import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import motivationalPhrases from '../../helpers/mock/motivationalPhrases';
import Swal from 'sweetalert2';

const msgMotivational = () => {
  const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
  return motivationalPhrases[randomIndex];
};

function App() {
  const [isMsgAlreadySent, setIsMsgAlreadySent] = useState(false);
  const [progress, setProgress] = useState(0);

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
      <main>
        <section>
          <div className={ styles.progressBarOuter }>
            <div
              className={ styles.progressBarInner } style={{ width: `${progress}%` }}
            ></div>
          </div>
        </section>
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
