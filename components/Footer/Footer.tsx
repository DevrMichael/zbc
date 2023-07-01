import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '../../assets/zenith-bygg-consult-as.png';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div>
          <h5>Renovering</h5>
          <a href="#">Alle tjenester</a>
          <a href="#">Prosjektoversikt</a>
        </div>
        <div>
          <h5>Investering</h5>
          <a href="#">Eiendomsinvestering</a>
        </div>
        <div>
          <h5>Firma</h5>
          <a href="#">Om Oss</a>
          <a href="#">Kontakt Oss</a>
          <a href="#">Våre Samarbeidspartnere</a>
        </div>
      </div>
      <hr />
      <div className={styles.copyrightSection}>
        <a href="#">
          <Image src={logo} alt="alt" width={130} height={50} />
        </a>
        <p>Copyright © 2023 Zenith Bygg Consult AS. All rights reserved.</p>
      </div>
    </div>
  );
}