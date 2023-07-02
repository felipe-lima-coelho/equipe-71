import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useState } from 'react';
import styles from './styles.module.css';

function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);

  const checkEmail = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(state.email);
  };

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;

    setState((prevState) => ({...prevState, [name]: value}));

    const isEmail = checkEmail();
    if (isEmail) setIsValid(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData();
  };

  const sendData = () => {
    const URL_API = '';
    fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta da API:', data);
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
      });
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            id="email"
            onChange={ handleChangeInput }
          />
        </label>
        
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            id="password"
            onChange={ handleChangeInput }
          />
        </label>

        <button
          disabled={ !isValid }
        >
          Entrar
        </button>
      </form>

      <div>
        <p>Não possui conta? <Link to="/cadastro">Cadastre-se</Link>.</p>
      </div>
    </div>
  )
}

export default Login;