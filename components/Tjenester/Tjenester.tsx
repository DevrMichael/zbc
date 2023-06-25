import React from 'react';
import styles from './Tjenester.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faEnvelope,
  faHouse,
  faHouseChimney,
  faScaleBalanced,
  faToolbox,
  faWeightScale,
} from '@fortawesome/free-solid-svg-icons';

export default function Tjenester() {
  return (
    <div className={styles.container}>
      <h1>Våre tjenester:</h1>
      <div className={styles.tjenester}>
        <div className={styles.tjeneste}>
          <FontAwesomeIcon className={styles.icon} icon={faToolbox} />
          <h3>Håndverkertjenester</h3>
          <p>
            Vi utfører det meste innen rehabilitering og oppussing av boliger,
            ingen prosjekter er for små eller for store.
          </p>
        </div>
        <div className={styles.tjeneste}>
          <FontAwesomeIcon className={styles.icon} icon={faHouseChimney} />
          <h3>Nybygg og tilbygg</h3>
          <p>
            Vi har ansatte med bred erfaring innen oppføring av boliger og kan
            tilby konkurransedyktige priser på våre leveranser med fokus på
            kvalitet.
          </p>
        </div>
        <div className={styles.tjeneste}>
          <FontAwesomeIcon className={styles.icon} icon={faBuilding} />
          <h3>Leie og utleie</h3>
          <p>
            Vi leier eiendommen din med rett til å fremleie og tilbyr
            langsiktige avtaler.
          </p>
        </div>
        <div className={styles.tjeneste}>
          <FontAwesomeIcon className={styles.icon} icon={faScaleBalanced} />
          <h3>Eiendomsadvokater</h3>
          <p>
            Zenith Bygg Consult kan i samarbeid med våre eiendomsadvokater tilby
            meget kompetente og dyktige jurister innenfor eiendomsrelaterte
            saker.
          </p>
        </div>
      </div>
    </div>
  );
}
