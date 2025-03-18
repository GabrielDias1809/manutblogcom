import React from 'react';
import styles from './quemSou.module.css';
import hoami from '../imgs/comunicante.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';

const quemSou = () => {
  return (
    <>
      <section id="hoami" className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className={styles.subtitle}>
              <FontAwesomeIcon icon={faLandmark} /> História
              </h2>
              <h1 className={styles.mayara}>Comunicações na Segunda Guerra</h1>
              <p className={styles.description}>Durante a Segunda Guerra Mundial, as comunicações do Exército Brasileiro desempenharam um papel crucial nas operações da Força Expedicionária Brasileira (FEB) na Itália. A utilização de rádios, cabos telefônicos e mensageiros foi essencial para coordenar ataques, movimentações de tropas e apoio logístico em um terreno desafiador. Os operadores de rádio, muitas vezes em posições avançadas, enfrentavam dificuldades como interferências, sabotagem inimiga e condições climáticas adversas. O treinamento especializado em criptografia e transmissões seguras garantiu que as mensagens não fossem interceptadas, contribuindo para o sucesso das operações da FEB, incluindo a célebre vitória na Batalha de Monte Castello.</p>
             
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                className={`image-fluid ${styles.imgblog}`}
                src={hoami}
                alt="Professora Mayara"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default quemSou;
