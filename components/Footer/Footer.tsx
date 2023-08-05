import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '../../assets/zenith-bygg-consult-as.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.links}>
        <div>
          <h5>Renovering</h5>
          <Link href="prosjekter">Prosjektoversikt</Link>
        </div>
        <div>
          <h5>Tjenester</h5>
          <Link href="handverkertjenester">Håndverkertjenester</Link>
          <Link href="nybygg-og-tilbygg">Nybygg og tilbygg</Link>
          <Link href="leie-og-utleie">Leie og utleie</Link>
          <Link href="eiendomsadvokater">Eiendomsadvokater</Link>
        </div>
        <div>
          <h5>Investering</h5>
          <Link href="eiendomsinvestering">Eiendomsinvestering</Link>
        </div>
        <div>
          <h5>Firma</h5>
          <Link href="omoss">Om Oss</Link>
          <Link href="kontaktoss">Kontakt Oss</Link>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <Link href={'/'}>
          <Image src={logo} alt="alt" width={160} height={45} />
        </Link>
        <p>Copyright © 2023 Zenith Bygg Consult AS. All rights reserved.</p>
      </div>
    </div>
  );
}
