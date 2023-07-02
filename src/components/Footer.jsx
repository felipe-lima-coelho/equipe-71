import { useContext } from "react";
import headerContext from "../context/providers/headerContext";
import styles from './styles/Footer.module.css';

function Footer() {
  const { pageUrl, setPageUrl, points, setPoints } = useContext(headerContext);

  if (pageUrl !== '/') {
    return (
      <footer className={ styles.footerContent }>Footer</footer>
    )
  }
}

export default Footer;