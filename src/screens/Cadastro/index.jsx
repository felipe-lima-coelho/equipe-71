import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import Swal from "sweetalert2";

function Cadastro() {
  const [state, setState] = useState({
    name: '',
    gender: 0,
    address: '',
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);
  const [isSucess, setIsSucess] = useState(false);

  const checkEmail = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(state.email);
  };

  const checkPasswordLength = () => {
    const { password } = state;
    
    if (password.length > 4) {
      return true;
    } else {
      return false;
    }
  };

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    const { name: nameState, gender, address, password } = state;

    if (name === 'gender') {
      setState((prevState) => ({...prevState, gender: Number(value)}));
    } else {
      setState((prevState) => ({...prevState, [name]: value}));
    }

    const isEmail = checkEmail();
    const isPassword = checkPasswordLength();

    if (nameState && gender && address && isEmail && isPassword) {
      setIsValid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData();
  };

  const sendData = () => {
    const URL_API = 'https://hackton-equipe-7.cyclic.app/signup';
    fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          return response.json()
        }
        if (response.status === 422) {
          throw new Error("Erro nos dados enviados!");
        }
      })
      .then((data) => {
        setIsSucess(true);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
      });
  };

  if (isSucess) return <Redirect to="/app" />

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            onChange={ handleChangeInput }
            value={ state.name }
          />
        </label>

        <div>
          Sexo:
          <label htmlFor="masc">
            <input
              type="radio"
              name="gender"
              id="masc"
              value="1"
              onChange={ handleChangeInput }
            />
            Masculino
          </label>
          <label htmlFor="fem">
            <input
              type="radio"
              name="gender"
              id="fem"
              value="2"
              onChange={ handleChangeInput }
            />
            Feminino
          </label>
          <label htmlFor="other">
            <input
              type="radio"
              name="gender"
              id="other"
              value="3"
              onChange={ handleChangeInput }
            />
            Outros
          </label>
        </div>
        
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            name="address"
            id="address"
            onChange={ handleChangeInput }
          />
        </label>

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
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Cadastro;