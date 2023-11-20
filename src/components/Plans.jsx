import React from 'react';
import styles from './Plans.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import calendar1 from '../imgs/calendar1.webp';
import calendar2 from '../imgs/calendar2.webp';
import calendar3 from '../imgs/calendar3.webp';
import calendar4 from '../imgs/calendar4.webp';

const Plans = () => {
  const arrayImages = [calendar1, calendar2, calendar3, calendar4];

  const indClass = [
    { bottom: '#FB4A8D', week: '1', month: '4', semester: '24', price: '300' },
    { bottom: '#C148FA', week: '2', month: '8', semester: '36', price: '450' },
    { bottom: '#FA7348', week: '2', month: '8', semester: '48', price: '600' },
    { bottom: '#487CFA', week: '3', month: '12', semester: '72', price: '900' },
  ];
  const groClass = [
    { bottom: '#FB4A8D', week: '1', month: '4', semester: '24', price: '200' },
    { bottom: '#C148FA', week: '2', month: '8', semester: '48', price: '400' },
  ];

  return (
    <section id="plans" className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className={styles.title}>
              <FontAwesomeIcon icon={faAlignRight} className="me-2" />
              Nossos planos
            </h2>
            <h2 className={styles.subtitle}>Planos semestrais individuais</h2>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-end">
            <p className={styles.description}>
              Os planos abaixo têm a duração de 6 meses, podendo ser renovados
              ao seu fim ou até cancelados , visto o pagamento da multa de
              quebra contratual.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {indClass.map((data, index) => (
              <div
                key={index}
                className="col-md-3 d-flex justify-content-center p-3"
              >
                <Card
                  bottom={data.bottom}
                  week={data.week}
                  month={data.month}
                  semester={data.semester}
                  price={data.price}
                  img={arrayImages[index]}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2 className={styles.subtitle}>Planos semestrais em grupo</h2>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {groClass.map((data, index) => (
              <div
                key={index}
                className="col-md-3 d-flex justify-content-center p-3"
              >
                <Card
                  bottom={data.bottom}
                  week={data.week}
                  month={data.month}
                  semester={data.semester}
                  price={data.price}
                  img={arrayImages[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
