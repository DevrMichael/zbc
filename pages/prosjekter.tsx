import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../public/projects/Skillebekk/Etter/skillebekk_etter7.jpeg';
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
          Vår prosjektoversikt står som en bekreftelse på vårt urokkelige løfte
          om å heve rom, gi dem nytt liv og forsterke deres funksjonelle og
          estetiske appell. Hvert prosjekt inneholder en reise av nøye
          planlegging, omhyggelig utførelse og en dyp forståelse for
          designprinsipper.
          <br />
          <br />
          Utforsk vårt galleri, med Før og Etter bilder som er sammenstilt for å
          fortelle historiene om hvordan vi forvandler boliger til å være preget
          av høy kvalitet. Se hvordan vi forvandler ordinære rom til fengslende
          miljøer, der eleganse, funksjonalitet og visuell tiltrekningskraft
          møtes.
          <br />
          <br />
          Klikk på våre prosjekter under for å få et innblikk i vår
          renoveringsprosess.
        </p>
        <Image
          src={image}
          alt=""
          style={{ width: '400px', height: '500px', objectFit: 'cover' }}
        />
      </div>
      <div className={projectStyles.prosjekter}>
        <div className={projectStyles.enkeltProsjekt}>
          <Link href={'prosjekt-1'}>
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
          <Link href={'prosjekt-2'}>
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
