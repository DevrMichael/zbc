import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './styles/Prosjekt.module.scss';
import Image from 'next/image';

interface ProsjektProps {
  imagesBefore: string[] | undefined;
  imagesAfter: string[] | undefined;
}

const Prosjekt3: React.FC<ProsjektProps> = ({ imagesBefore, imagesAfter }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Før">
            {imagesBefore?.map((imageUrl, index) => (
              <div key={`before_${index}`} className={styles.imageContainer}>
                <Image
                  src={imageUrl}
                  alt={`Before Image ${index + 1}`}
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </Tab>
          <Tab eventKey="profile" title="Etter">
            {imagesAfter?.map((imageUrl, index) => (
              <div key={`after_${index}`} className={styles.imageContainer}>
                <Image
                  src={imageUrl}
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

export default Prosjekt3;
