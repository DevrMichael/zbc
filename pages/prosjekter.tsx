import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../components/Hero/assets/project-1.jpeg';
import projects from '../components/Hero/data/projects';
import projectStyles from './styles/Prosjekter.module.scss';

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
        <Image src={image} alt="" width={400} height={500} />
      </div>
      <div className={projectStyles.prosjekter}>
        <div className={projectStyles.enkeltProsjekt}>
          <Image
            className={projectStyles.projectImage}
            src={projects[0].image}
            alt=""
            width={300}
            height={400}
          />
          <div className={projectStyles.projectText}>
            <h6>Tittel</h6>
            <p>Beskrivelse</p>
          </div>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Image
            className={projectStyles.projectImage}
            src={projects[0].image}
            alt=""
            width={300}
            height={400}
          />
          <div className={projectStyles.projectText}>
            <h6>Tittel</h6>
            <p>Beskrivelse</p>
          </div>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Image
            className={projectStyles.projectImage}
            src={projects[0].image}
            alt=""
            width={300}
            height={400}
          />
          <div className={projectStyles.projectText}>
            <h6>Tittel</h6>
            <p>Beskrivelse</p>
          </div>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Image
            className={projectStyles.projectImage}
            src={projects[0].image}
            alt=""
            width={300}
            height={400}
          />
          <div className={projectStyles.projectText}>
            <h6>Tittel</h6>
            <p>Beskrivelse</p>
          </div>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Image
            className={projectStyles.projectImage}
            src={projects[0].image}
            alt=""
            width={300}
            height={400}
          />
          <div className={projectStyles.projectText}>
            <h6>Tittel</h6>
            <p>Beskrivelse</p>
          </div>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Image
            className={projectStyles.projectImage}
            src={projects[0].image}
            alt=""
            width={300}
            height={400}
          />
          <div className={projectStyles.projectText}>
            <h6>Tittel</h6>
            <p>Beskrivelse</p>
          </div>
        </div>
        <div className={projectStyles.enkeltProsjekt}>
          <Image
            className={projectStyles.projectImage}
            src={projects[0].image}
            alt=""
            width={300}
            height={400}
          />
          <div className={projectStyles.projectText}>
            <h6>Tittel</h6>
            <p>Beskrivelse</p>
          </div>
        </div>
      </div>
    </div>
  );
}
