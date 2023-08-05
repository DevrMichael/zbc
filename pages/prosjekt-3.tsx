import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './styles/Prosjekt.module.scss';
import Image from 'next/image';
import projectImages from '../assets/projectImages';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Prosjekt1: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleTabSelect = (tab: string | null) => {
    if (tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className={styles.container}>
      <Link href={'/prosjekter'} className={styles.backToProjectsLink}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Tilbake til prosjekter
      </Link>
      <h2>Totalrenovering av bolig - Skillebekk</h2>
      <div className={styles.tabsContainer}>
        <Tabs
          activeKey={activeTab}
          onSelect={handleTabSelect}
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Før">
            {activeTab === 'home' &&
              projectImages[2].before.map((image, index: number) => (
                <div key={`before_${index}`} className={styles.imageContainer}>
                  <Image
                    src={image.image}
                    alt={`Before Image ${index + 1}`}
                    width={300}
                    height={200}
                  />
                </div>
              ))}
          </Tab>
          <Tab eventKey="profile" title="Etter">
            {activeTab === 'profile' &&
              projectImages[2].after.map((image, index: number) => (
                <div key={`after_${index}`} className={styles.imageContainer}>
                  <Image
                    src={image.image}
                    alt={`After Image ${index + 1}`}
                    width={300}
                    height={200}
                  />
                </div>
              ))}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Prosjekt1;
