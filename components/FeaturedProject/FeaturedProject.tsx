import React from 'react';
import styles from './FeaturedProject.module.scss';
import Image from 'next/image';
import image from '../Hero/assets/project-1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function FeaturedProject() {
  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <div className={styles.imageWithHeader}>
          <Image
            src={image}
            alt="Alt text"
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
          <h5>
            <a href="#">View project</a> <FontAwesomeIcon icon={faArrowRight} />
          </h5>
        </div>
        <div className={styles.singleImage}>
          <Image
            src={image}
            alt="Alt text"
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
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
