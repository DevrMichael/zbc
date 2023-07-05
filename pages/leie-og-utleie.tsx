import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../components/Hero/assets/project-1.jpeg';

export default function PageTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Leie og utleie av bolig</h5>
        <h1>Eier du en eller flere boligere som du ønsker å leie ut?</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p>
            Vi ønsker å komme i kontakt med eiendomsaktører som eier en eller
            flere boliger og ser fordelene med å ha kun en leietaker å forholde
            seg til over lengre tid. Vi leier eiendommen din med rett til å
            fremleie og tilbyr langsiktige avtaler.
            <br />
            <br />
            Fordelene med vår forretningsmodell er bl.a.:
            <br />
          </p>
          <ul>
            <li>
              Leien utbetales garantert til avtalt tid i hele leieperioden
            </li>
            <li>Langsiktige avtaler som gir økonomisk forutsigbarhet</li>
            <li>100% belegg i hele avtaleperioden.</li>
            <li>Mindre ressurskrevende og administrasjon</li>
            <li>Spar tid og penger på annonsering/visninger</li>
          </ul>
          <p>
            Gjør leieforholdet trygt, enkelt og problemfritt!Leie og utleie av
            bolig
          </p>
        </div>
        <Image src={image} alt="" width={400} height={500} />
      </div>
    </div>
  );
}
