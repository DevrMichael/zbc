import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../components/Hero/assets/project-2.jpeg';
import projects from '../components/Hero/data/projects';
import tøyenImg from '../public/projects/Tøyen/Etter/tøyen_etter5.jpeg';
import majorstuaImg from '../public/projects/Majorstua/Etter/majorstua_etter8.jpeg';
import skillebekkImg from '../public/projects/Skillebekk/Etter/skillebekk_etter8.jpeg';
import marienlystImg from '../public/projects/Marienlyst/Etter/marienlyst_etter5.jpeg';
import haugerudImg from '../public/projects/Haugerud/Etter/haugerud_etter1.jpeg';
import projectStyles from './styles/Prosjekter.module.scss';
import Link from 'next/link';

export default function PageTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Prosjekter</h5>
        <h1>Oversikt over et utvalg av våre prosjekter</h1>
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
        <Image
          src={image}
          alt=""
          style={{ width: '400px', height: '500px', objectFit: 'cover' }}
        />
      </div>
      <div className={projectStyles.prosjekter}>
        <div className={projectStyles.enkeltProsjekt}>
          <Link href={'prosjekt-2'}>
            <Image
              className={projectStyles.projectImage}
              src={majorstuaImg}
              alt=""
              style={{ width: '330px', height: '500px', objectFit: 'cover' }}
            />
            <div className={projectStyles.projectText}>
              <h6>Majorstua</h6>
              <p>Totalrenovering</p>
            </div>
          </Link>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Link href={'prosjekt-1'}>
            <Image
              className={projectStyles.projectImage}
              src={tøyenImg}
              alt=""
              style={{ width: '330px', height: '500px', objectFit: 'cover' }}
            />
            <div className={projectStyles.projectText}>
              <h6>Tøyen</h6>
              <p>Totalrenovering</p>
            </div>
          </Link>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Link href={'prosjekt-3'}>
            <Image
              className={projectStyles.projectImage}
              src={skillebekkImg}
              alt=""
              style={{ width: '330px', height: '500px', objectFit: 'cover' }}
            />
            <div className={projectStyles.projectText}>
              <h6>Skillebekk</h6>
              <p>Totalrenovering</p>
            </div>
          </Link>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Link href={'prosjekt-4'}>
            <Image
              className={projectStyles.projectImage}
              src={marienlystImg}
              alt=""
              style={{ width: '330px', height: '500px', objectFit: 'cover' }}
            />
            <div className={projectStyles.projectText}>
              <h6>Marienlyst</h6>
              <p>Totalrenovering</p>
            </div>
          </Link>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Link href={'prosjekt-5'}>
            <Image
              className={projectStyles.projectImage}
              src={haugerudImg}
              alt=""
              style={{ width: '330px', height: '500px', objectFit: 'cover' }}
            />
            <div className={projectStyles.projectText}>
              <h6>Haugerud</h6>
              <p>Totalrenovering</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
