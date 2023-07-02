import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom';
import { useContext, useState } from 'react';
import styles from './styles.module.css';
import Swal from 'sweetalert2';
import headerContext from '../../context/providers/headerContext';

function Login() {
  const { setPageUrl } = useContext(headerContext);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

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
    // const URL_API = '';
    // fetch(URL_API, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(state),
    // })
    //   .then((response) => {
    //     if (response.status === 201) {
    //       return response.json()
    //     }
    //     if (response.status === 422) {
    //       throw new Error("Erro nos dados enviados!");
    //     }
    //     if (response.status === 404) {
    //       throw new Error("Não foi possível encontrar o email e/ou senha!");
    //     }
    //   })
    //   .then((data) => {
    //     setPageUrl('/app');
    //     setIsSucess(true);
    //   })
    //   .catch((error) => {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: error,
    //     })
    //   });
    setPageUrl('/app');
    setIsSucess(true);
  };

  const handleClickCadastre = () => {
    setPageUrl('/cadastro');
  }

  if (isSucess) return <Redirect to="/app" />

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
        <p>
          Não possui conta?&nbsp;
          <Link
            onClick={ handleClickCadastre }
            to="/cadastro"
          >
            Cadastre-se
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login;