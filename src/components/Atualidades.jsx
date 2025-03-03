import React from 'react';
import styles from './atualidades.module.css';
import paraquedas from '../imgs/paraquedas.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';

const atualidades = () => {
  return (
    <>
      <section id="atualidades" className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className={styles.subtitle}>
              <FontAwesomeIcon icon={faLandmark} /> Atualidades
              </h2>
              <h1 className={styles.mayara}>Paraquedas de Tropa rz 21-1</h1>
              <p className={styles.description}>
                O Paraquedas de Tropa RZ 21-1 destaca-se por
                possibilitar a realização de saltos intencionais a partir de
                aeronaves. A abertura do paraquedas ocorre de forma
                básica por meio do acionamento automático direto da
                Bolsa do Velame, requerendo um tempo de salto superior
                a 1 segundo.(EB).
              </p>
              <p className={styles.description}>O Velame do Paraquedas possui um design especial,
                sendo confeccionado com um tecido que apresenta dois
                níveis de permeabilidades distintos. Composto por 30
                painéis e 30 linhas de suspensão que atravessam da rede
                para o interior do velame, onde são habilmente
                costuradas, este método de construção confere a
                distintiva forma lenticular ao Paraquedas RZ-21.
              </p>
              <p className={styles.description}>
                Durante o evento, a equipe da empresa Vertical do Ponto
                esteve na Zona de Lançamento (ZL) de Afonsos, no Rio de
                Janeiro, acompanhando os lançamentos dos
                paraquedistas e testemunhando a eficácia e
                funcionalidade do paraquedas inovador.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                className={`image-fluid ${styles.imgblog}`}
                src={paraquedas}
                alt="Professora Mayara"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default atualidades;
