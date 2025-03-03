import React from 'react';
import styles from './Home.module.css';
import Header from './Header';

const Home = () => {
  return (
    <>
      <section id="home" className={styles.section}>
        <Header />
        <div className="container">
          <div className="row">
              <div>
                <h1 className={styles.welcome}>MANUTENÇÃO DE COMUNICAÇÕES</h1>
                <p className={styles.obs}>
                  INSTALA, EXPLORA, MANTÉM
                </p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
