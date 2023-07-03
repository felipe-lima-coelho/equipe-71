import styles from './styles.module.css';

function Talk() {
  return (
    <main className={ styles.mainChat }>
      <div>
        <input
          type="text"
          name="chat"
          id="chat"
        />
        
        <button>
          Enviar
        </button>
      </div>
    </main>
  )
}

export default Talk;
