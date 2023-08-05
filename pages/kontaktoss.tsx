import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../components/Hero/assets/project-1.jpeg';

export default function PageTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <h1>Kontakt</h1>
        <p>Telefon:</p>
        <p>Epost:</p>
      </div>
    </div>
  );
}
