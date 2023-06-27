import React from 'react';
import styles from './Hero.module.scss';
import { Button } from 'react-bootstrap';
import projects from './data/projects';
import Image from 'next/image';

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
      <div className={styles.projects}>
        {projects.map((project: any) => {
          return (
            <div key={project.id} className={styles.singleProject}>
              <Image
                className={styles.projectImage}
                src={project.image}
                alt=""
                width={300}
                height={370}
              />
              <div className={styles.projectText}>
                <h6>{project.title}</h6>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
