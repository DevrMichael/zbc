import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../components/Hero/assets/project-1.jpeg';

export default function PageTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Eiendomsadvokater</h5>
        <h1>For deg som trenger juridisk bistand i eiendomsrelaterte saker</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p>
            Zenith Bygg Consult kan i samarbeid med våre eiendomsadvokater tilby
            meget kompetente og dyktige jurister innenfor eiendomsrelaterte
            saker. Vi har forhandlet fram gode betingelser som våre kunder kan
            dra nytte av.
            <br />
            <br />
            Dette gjelder bistand ved bl.a.:
            <br />
          </p>
          <ul>
            <li>Feil og mangler ved bolig</li>
            <li>Seksjonering</li>
            <li>Fradeling av tomt</li>
            <li>Saker opp mot plan- og bygningsetaten</li>
            <li>m.m</li>
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
