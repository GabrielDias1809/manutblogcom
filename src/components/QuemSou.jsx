import React from 'react';
import styles from './quemSou.module.css';
import hoami from '../imgs/prec.jpeg';
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
              <h1 className={styles.mayara}>História dos Precursores</h1>
              <p className={styles.description}>
              Desde a Segunda Guerra Mundial, as operações
              aeroterrestres têm moldado o campo de batalha,
              impulsionando o Brasil a modernizar suas Forças
              Armadas. Nesse contexto, surgiram os precursores
              paraquedistas, militares especializados em
              operações de envolvimento vertical, que se
              tornaram uma força estratégica essencial para o
              Exército Brasileiro (EB).
              </p>
              <p className={styles.description}>Assim, ao longo de décadas, os precursores
              paraquedistas desempenharam papel crucial em
              diversos momentos da história militar brasileira. Por
              exemplo, a criação do primeiro Curso de Operações
              Especiais do EB, o desenvolvimento da doutrina de
              busca e salvamento, que deu origem ao Esquadrão
              Aéreo de Salvamento da Força Aérea Brasileira, a
              abertura de diversas pistas de pouso na imensidão
              amazônica e o início das instruções especiais para
              os Cadetes da Academia Militar das Agulhas
              Negras (AMAN).</p>
              <p className={styles.description}>A história dos precursores remonta à década de
              1940, quando jovens oficiais e sargentos do
              Exército Brasileiro foram enviados a outros países
              para realizar cursos de especialização em
              paraquedismo militar, entre eles o Pathfinder. Essa
              iniciativa pioneira culminou na criação da Escola de
              Paraquedistas, em 1945.</p>
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
