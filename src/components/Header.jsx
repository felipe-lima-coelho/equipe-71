import { useContext, useEffect } from 'react';
import headerContext from '../context/providers/headerContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import styles from './styles/Header.module.css';
import { ArrowCircleLeft, UserCircle } from '@phosphor-icons/react';
import logo from '../assets/logo2.png';

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
              className={ styles.goBackBtn }
            >
              <ArrowCircleLeft size={ 36 } />
            </button>
          ) : <div className={ styles.imgTransparentOnHeader }></div>
        }
        <img
          src={ logo }
          alt="Coração verde com símbolo de dinheiro"
          className={ styles.logo }
        />

        <div>
          <UserCircle size={ 36 } />
          { points }
        </div>
      </header>
    )
  }
}

export default Header;
