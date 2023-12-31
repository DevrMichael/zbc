import React from 'react';
import styles from './Hero.module.scss';
import { Button } from 'react-bootstrap';
import projects from './data/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Fra Bolig til{' '}
          <span className={styles.heroTagline}>Ditt Drømmehjem</span>
        </h1>
        <p>
          Lei den rette entreprenøren og bygg din visjon med Zenith Bygg
          Consult.
        </p>
        <Button>
          <Link href={'prosjekter'}>Klikk for å se våre prosjekter</Link>
        </Button>
      </div>
      <div className={styles.projects}>
        {projects.map((project: any) => {
          return (
            <div key={project.id} className={styles.singleProject}>
              <Link href={project.url}>
                <Image
                  className={styles.projectImage}
                  src={project.image}
                  alt=""
                  style={{
                    width: '400px',
                    height: '400px',
                    objectFit: 'cover',
                  }}
                />
              </Link>
              <div className={styles.projectText}>
                <a href="#">
                  <h6>{project.title}</h6>
                </a>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
