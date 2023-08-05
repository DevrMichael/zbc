import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../public/tjenester/eiendomsinvestering.jpeg';

export default function PageTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Eiendomsinvestering</h5>
        <h1>Vi tilbyr ulike investeringsmuligheter</h1>
      </div>
      <div className={styles.content}>
        <p>
          Zenith Bygg Consult har spesialisert seg innenfor eiendomsutvikling og
          utfører prosjekter på vegne av investorer og på egeneid eiendom.
          <br />
          <br />
          Har du en bolig eller tomt til salgs med et utviklingspotensial? Eller
          søker du investor? Vi kan være interessert i å kjøpe eiendommen eller
          eventuelt utvikle den i samarbeid med deg. Vi er fleksible og har
          flere gode samarbeidsmodeller. Rehabiliteringsprosjekter er også av
          interesse for oss.
          <br />
          <br />
          Ta gjerne kontakt for en uforpliktende prat!
        </p>
        <Image
          src={image}
          alt=""
          style={{ width: '400px', height: '300px', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
