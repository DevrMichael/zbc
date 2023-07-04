import React from 'react';
import styles from './ProsjekterId.module.scss';
import Image from 'next/image';
import imageSrc from '../../../components/Hero/assets/project-1.jpeg';
import imageSrc1 from '../../../components/Hero/assets/project-2.jpeg';
import imageSrc2 from '../../../components/Hero/assets/project-3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faCircle,
  faComments,
  faUser,
} from '@fortawesome/free-regular-svg-icons';

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <h5>Remodel my kitchen, bathroom and closets in Windsor Terrase</h5>
        <p>Posted by Sheila R.</p>
        <div className={styles.allImages}>
          <Image src={imageSrc} alt="gilje dører" width={350} height={510} />
          <div className={styles.verticalImages}>
            <Image src={imageSrc1} alt="gilje dører" width={200} height={250} />
            <Image src={imageSrc2} alt="gilje dører" width={200} height={250} />
          </div>
        </div>
      </div>
      <div className={styles.projectInfoSection}>
        <div className={styles.projectDetails}>
          <h4>Project Overview</h4>
          <div className={styles.projectDetail}>
            <FontAwesomeIcon icon={faComments} className={styles.quoteIcon} />
            <div className={styles.projectText}>
              <p>Room(s) renovated</p>
              <p className={styles.subtext}>
                Kitchen (1), Bathroom (1), Closet (1)
              </p>
            </div>
          </div>
          <div className={styles.projectDetail}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={styles.quoteIcon}
            />
            <div className={styles.projectText}>
              <p>Room(s) renovated</p>
              <p className={styles.subtext}>
                Kitchen (1), Bathroom (1), Closet (1)
              </p>
            </div>
          </div>
          <div className={styles.projectDetail}>
            <FontAwesomeIcon icon={faUser} className={styles.quoteIcon} />
            <div className={styles.projectText}>
              <p>Room(s) renovated</p>
              <p className={styles.subtext}>
                Kitchen (1), Bathroom (1), Closet (1)
              </p>
            </div>
          </div>
        </div>
        <div className={styles.projectDescription}>
          <h4>Project Description</h4>
          <p>
            We will be closing soon on a two bedroom co-op in Windsor Terrace.
            We would like to update the eat-in-kitchen and bathroom keeping the
            existing layouts, open up the foyer and renovate/combine closets to
            maximize storage. We would like brighten the apartment as much as
            possible as some rooms dont get a lot of natural light, in
            particular the kitchen and the smaller bedroom.
          </p>
        </div>
      </div>
    </div>
  );
}
