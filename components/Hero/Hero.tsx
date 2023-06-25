import React from 'react';
import styles from './Hero.module.scss';
import { Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Your renovation, our expertise</h1>
        <p>
          Hire the right general contractor and build your vision with Zenith
          Bygg Consult.
        </p>
        <Button>Let&apos;s get started</Button>
      </div>
      <div className={styles.projects}></div>
    </div>
  );
}
