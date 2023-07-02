import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../components/Hero/assets/project-1.jpeg';

export default function PageTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Our story</h5>
        <h1>How one womans renovation disaster transformed an industry</h1>
      </div>
      <div className={styles.content}>
        <p>
          Jean Brownhill, our founder, is a trained architect with years of
          high-end residential and commercial renovation experience. Naturally,
          she assumed she’d sail through her own home renovation. She didn’t.
          After suffering a botched renovation and three New York winters
          without heat, she started wondering how regular people—anyone without
          her experience and professional credentials—could ever manage
          renovating on their own.
          <br />
          <br />
          She also realized that on the other side, general contractors
          struggled to grow their businesses, often feeling pressure to take on
          jobs they lacked the expertise to handle.
          <br />
          <br />
          Jean saw the need for a new approach, and so in 2011 she started
          Sweeten. Our company quickly grew from a desk in Jean’s spare room to
          a succession of ever-larger offices in downtown Manhattan, along with
          a growing network of the nation’s most qualified general contractors.
        </p>
        <Image src={image} alt="" width={400} height={500} />
      </div>
    </div>
  );
}
