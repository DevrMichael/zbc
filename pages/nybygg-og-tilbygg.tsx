import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../components/Hero/assets/project-1.jpeg';

export default function PageTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Nybygg og tilbygg</h5>
        <h1>Bygge eller utvide eksisterende bolig?</h1>
      </div>
      <div className={styles.content}>
        <p>
          Drømmer du om å bygge egen bolig eller ønsker å utvide eksisterende
          bolig med et tilbygg?
          <br />
          <br />
          Vi har ansatte med bred erfaring innen oppføring av boliger og kan
          tilby konkurransedyktige priser på våre leveranser med fokus på
          kvalitet.
          <br />
          <br />
          Zenith Bygg Consult samarbeider med dyktige arkitekter og vi kan
          dermed gjennomføre hele eller deler av prosjektet fra tegnebordet til
          ferdigstillelse av boligen.
          <br />
          <br />
          Ta gjerne kontakt med oss for å diskutere ditt drømmeprosjekt.
        </p>
        <Image
          src={image}
          alt=""
          style={{ width: '400px', height: '500px', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
