import { useContext, useEffect } from 'react';
import headerContext from '../context/providers/headerContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import styles from './styles/Header.module.css';
import { ArrowCircleLeft, Coins } from '@phosphor-icons/react';
import logo from '../assets/logo.svg';

function Header() {
  const { pageUrl, setPageUrl, points, setPoints } = useContext(headerContext);

  const history = useHistory();
  const page = history.location.pathname;

  useEffect(() => {}, [pageUrl, points]);

  // const getFetchDataPoints = async () => {
  //   const API_URL = '';
  //   try {
  //     const response = await fetch(API_URL);
  //     const data = await response.json();
  //     setPoints(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getFetchDataPoints();
  // }, []);

  const handleBackPage = () => {
    if (page === '/cadastro') setPageUrl('/');
    history.goBack();
  };

  if (pageUrl !== '/' && pageUrl !== '/cadastro') {
    return (
      <header className={ styles.headerContainer }>
        {
          pageUrl !== '/app' ? (
            <button
              onClick={ handleBackPage }
            >
              <ArrowCircleLeft size={ 32 } />
            </button>
          ) : <div className={ styles.imgTransparentOnHeader }></div>
        }
        <img
          src={ logo }
          alt="Coração amarelo com símbolo de dinheiro"
          className={ styles.logo }
        />

        <div>
          <Coins size={ 32 } />
          { points }
        </div>
      </header>
    )
  }
}

export default Header;
