import { useContext } from "react";
import headerContext from "../context/providers/headerContext";
import styles from './styles/Footer.module.css';
import { Gift, HandHeart, Target } from "@phosphor-icons/react";

function Footer() {
  const { pageUrl, setPageUrl, points, setPoints } = useContext(headerContext);

  if (pageUrl !== '/' && pageUrl !== '/cadastro') {
    return (
      <footer className={ styles.footerContent }>
        <Gift size={ 40 } />
        <Target size={ 40 } />
        <HandHeart size={ 40 } />
      </footer>
    )
  }
}

export default Footer;