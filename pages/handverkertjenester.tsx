import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../components/Hero/assets/project-1.jpeg';

export default function PageTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Håndverkertjenester</h5>
        <h1>Vi tilbyr et bredt utvalg av håndverkertjenester</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <p>
            Vi utfører det meste innen rehabilitering og oppussing av boliger,
            ingen prosjekter er for små eller for store.
            <br />
            <br />
            Vi har alle typer håndverkere og tilbyr tjenester innenfor bl.a.
            følgende områder:
            <br />
            <br />
          </p>
          <ul>
            <li>Tømrer og snekkerarbeid</li>
            <li>Rør og elektrikerarbeid</li>
            <li>Prosjektledelse</li>
            <li>Våtrom og Bad</li>
            <li>Totalentreprenør</li>
            <li>m.m</li>
          </ul>
          <p>
            Zenith Bygg Consult sørger for at leveransen blir i henhold til
            kravspesifikasjon og budsjett!
            <br />
            <br />
            Vi utarbeider kravspesifikasjon i samarbeid med kunden og finner
            fram til de beste løsningene på hva som bør gjøres, hvordan det skal
            gjøres og valg av materialet.
            <br />
            <br />
            Ta kontakt for gratis befaring og et uforpliktende tilbud.
          </p>
        </div>
        <Image src={image} alt="" width={500} height={500} />
      </div>
    </div>
  );
}
