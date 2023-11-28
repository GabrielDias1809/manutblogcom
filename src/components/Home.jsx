import React from 'react';
import styles from './Home.module.css';
import Header from './Header';
import mayara from '../imgs/foto_mayara_grande.webp';

const Home = () => {
  return (
    <>
      <section id="home" className={styles.section}>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h1 className={styles.welcome}>Bem vindo</h1>
                <h1 className={styles.realEnglish}>ao inglês real</h1>
                <h1 className={styles.realEnglish}>e independente</h1>
                <p className={styles.obs}>
                  Aulas particulares individuais e em grupo de inglês
                  personalizadas.
                </p>
                <button className={styles.signupButton}>
                  Quero me inscrever!
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid d-flex justify-content-center dimensao"
                src={mayara}
                alt="Imagem da professora Mayara"
                width="640"
                height="360"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
