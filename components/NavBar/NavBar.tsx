import React from 'react';
import styles from './NavBar.module.scss';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.navLogo} />
      <nav>
        <a href="omoss">Om Oss</a>
        <Dropdown>
          <Dropdown.Toggle
            className={styles.dropdownToggle}
            id="dropdown-basic"
          >
            Tjenester
          </Dropdown.Toggle>

          <Dropdown.Menu className={styles.dropdownToggleOptions}>
            <Dropdown.Item href="/handverkertjenester">
              Håndverkertjenester
            </Dropdown.Item>
            <Dropdown.Item href="/nybygg-og-tilbygg">
              Nybygg og tilbygg
            </Dropdown.Item>
            <Dropdown.Item href="/leie-og-utleie">
              Leie og uteleie av bolig
            </Dropdown.Item>
            <Dropdown.Item href="/eiendomsadvokater">
              Eiendomsadvokater
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a href="prosjekter">Prosjekter</a>
        <a href="eiendomsinvestering">Eiendomsinvestering</a>
        <a href="kontaktoss">Kontakt Oss</a>
        <Button variant="outline-primary">Start your renovation</Button>
      </nav>
    </div>
  );
}
