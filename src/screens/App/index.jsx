import { useState } from 'react';
import styles from './styles.module.css';
import motivationalPhrases from '../../helpers/mock/motivationalPhrases';

const msgMotivational = () => {
  const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
  return motivationalPhrases[randomIndex];
};

function App() {
  return (
    <div>
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
          <button>Enviar</button>
        </section>
      </section>
    </div>
  )
}

export default App;
