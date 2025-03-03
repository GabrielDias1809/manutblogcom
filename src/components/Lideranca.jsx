import React from 'react';
import styles from './lideranca.module.css';
import aviao from '../imgs/aviao.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';

const lideranca = () => {
  return (
    <>
      <section id="lideranca" className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className={styles.subtitle}>
              <FontAwesomeIcon icon={faLandmark} /> Liderança
              </h2>
              <h1 className={styles.mayara}>Liderança dos Precursores</h1>
              <p className={styles.description}>
                Em 14 de dezembro de 1962, a tropa
                precursora do Exército Brasileiro
                demonstrou notável liderança durante uma
                complexa missão de busca e salvamento
                na Amazônia. Após a queda de um avião
                Constellation da Panair do Brasil, sem
                sobreviventes, os precursores foram
                designados para localizar os destroços
                em meio à densa floresta.
              </p>
              <p className={styles.description}>Enfrentando condições adversas e terreno
                inóspito, eles abriram uma clareira que
                ficou conhecida como "clareira do avião",
                permitindo o acesso ao local do acidente.
              </p>
              <p className={styles.description}>Essa operação destacou a capacidade de
                liderança, coragem e determinação da
                tropa precursora em situações de alto
                risco, reforçando seu compromisso com a
                missão e a segurança.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                className={`image-fluid ${styles.imgblog}`}
                src={aviao}
                alt="Professora Mayara"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default lideranca;
