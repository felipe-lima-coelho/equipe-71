import { Link } from 'react-router-dom/cjs/react-router-dom';
import styles from './styles.module.css';

function Login() {
  return (
    <div>
      <form>
        <label htmlFor="email">
          Email
          <input type="text" name="email" id="email" />
        </label>
        
        <label htmlFor="password">
          Senha
          <input type="password" name="password" id="password" />
        </label>

        <button>Entrar</button>
      </form>

      <div>
        <p>Não possui conta? <Link to="/cadastro">Cadastre-se</Link>.</p>
      </div>
    </div>
  )
}

export default Login;