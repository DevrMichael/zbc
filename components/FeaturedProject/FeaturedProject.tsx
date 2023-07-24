import React from 'react';
import styles from './FeaturedProject.module.scss';
import Image from 'next/image';
import before from '../../public/featured/featured-before.jpeg';
import after from '../../public/featured/featured-after.jpeg';
import redArrow from '../../public/featured/featured-red-arrow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function FeaturedProject() {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <div className={styles.imageWithHeader}>
          <h4 className={styles.imageText}>Før</h4>
          <Image
            src={before}
            alt="Alt text"
            style={{ width: '400px', height: '500px', objectFit: 'cover' }}
          />
          <h5>
            <a href="#">Se prosjekt</a> <FontAwesomeIcon icon={faArrowRight} />
          </h5>
        </div>
        <div className={styles.singleImage}>
          <h4 className={styles.imageText}>Etter</h4>
          <Image
            src={redArrow}
            alt="red arrow"
            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            className={styles.redArrow}
          />
          <Image
            className={styles.afterImage}
            src={after}
            alt="Alt text"
            style={{ width: '400px', height: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />
        <h2>
          For years, when I went to other peoples homes, I wished I could have
          spaces like these. Now I do. I am so very grateful.
        </h2>
        <br />
        <h3>- Mickey</h3>
        <h5>Kitchen, bathroom & laundry renovation</h5>
      </div>
    </div>
  );
}
