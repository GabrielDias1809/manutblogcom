import React from 'react';
import styles from './quemSou.module.css';
import hoami from '../imgs/hoami.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';

const quemSou = () => {
  return (
    <>
      <section id="hoami" className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className={styles.subtitle}>
                <FontAwesomeIcon icon={faAlignRight} /> Quem Sou Eu
              </h2>
              <h1 className={styles.mayara}>Mayara Oliveira</h1>
              <p className={styles.description}>
                Mayara tem 23 anos, é empreendedora, dona da marca English with
                Mayara, professora particular de inglês há mais de 1 ano, é
                aluna de graduação em Letras - Licenciatura Bilíngue na PUC-Rio,
                tradutora, legendadora e professora da Educação Infantil.
              </p>
              <div className={`${styles.box1} container`}>
                <div className="container">
                  <div className={styles.circle1} />
                  <h1 className={styles.classes}>Aulas individuais</h1>
                  <p className={styles.indclasses}>
                    Aulas personalizadas de inglês com Mayara Oliveira, online
                    via Google Meet, oferecem autonomia ao aluno para
                    aprendizado eficaz.
                  </p>
                </div>
              </div>
              <div className={`${styles.box2} container`}>
                <div className="container">
                  <div className={styles.circle2} />
                  <h1 className={styles.classes}>Aulas em grupo</h1>
                  <p className={styles.indclasses}>
                    Aulas em grupo com Mayara Oliveira, Online via Google Meet,
                    ambiente acolhedor,Engajamento e desenvolvimento nivelados.
                  </p>
                </div>
              </div>
              <button className={styles.signupButton}>
                Inscreva-se agora!
              </button>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                className="img-fluid dimensao"
                src={hoami}
                alt="Professora Mayara"
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

export default quemSou;
