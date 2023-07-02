import React from 'react';
import styles from './styles/PageTemplate.module.scss';
import Image from 'next/image';
import image from '../components/Hero/assets/project-1.jpeg';

export default function PageTemplate() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Om Oss</h5>
        <h1>Hva gjør Zenith Bygg Consult AS?</h1>
      </div>
      <div className={styles.content}>
        <p>
          Zenith Bygg Consult AS er et selskap som tilbyr en rekke tjenester
          innenfor bygg og eiendom. Vår stab består av kvalifiserte fagfolk som
          er klare til å lede og utføre prosjektet ditt, tømrer, flislegger,
          murer, maler og mer.
          <br />
          <br />
          Vi har sentral godkjenning og er en godkjent våtromsbedrift. Vår
          byggmester og prosjektleder er innehaver av mesterbrev. I samarbeid
          med våre dyktige underleverandører innen elektro og rørarbeid kan vi
          tilby en totalentreprise.
          <br />
          <br />
          Vi har høy fokus på kvalitet, HMS og økonomi i alle våre prosjekter.
        </p>
        <Image src={image} alt="" width={400} height={500} />
      </div>
    </div>
  );
}
