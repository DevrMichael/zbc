import React from 'react';
import styles from './NavBar.module.scss';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.navLogo} />
      <nav>
        <a href="omoss">Om Oss</a>
        <a href="tjenester">Tjenester</a>
        <a href="prosjekter">Prosjekter</a>
        <a href="eiendomsinvestering">Eiendomsinvestering</a>
        <a href="samarbeidspartnere">Samarbeidspartnere</a>
        <a href="kontaktoss">Kontakt Oss</a>
        <Button variant="outline-primary">Start your renovation</Button>
      </nav>
    </div>
  );
}
