import React from 'react';
import styles from './NavBar.module.scss';
import { Button } from 'react-bootstrap';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navLogo}></div>
      <nav>
        <a href="#">Om Oss</a>
        <a href="#">Tjenester</a>
        <a href="#">Prosjekter</a>
        <a href="#">Eiendomsinvestering</a>
        <a href="#">Samarbeidspartnere</a>
        <a href="#">Kontakt Oss</a>
        <Button variant="outline-primary">Start your renovation</Button>
      </nav>
    </div>
  );
}
