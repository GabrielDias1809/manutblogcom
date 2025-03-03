import React from 'react';
import styles from './Plans.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import calendar1 from '../imgs/calendar1.svg';
import calendar2 from '../imgs/calendar2.svg';
import calendar3 from '../imgs/calendar3.svg';
import calendar4 from '../imgs/calendar4.svg';
import calendar5 from '../imgs/calendar5.svg';

const Plans = () => {
  const arrayImages = [calendar1, calendar2, calendar3, calendar4, calendar5];

  const indClass = [
    { bottom: '#0FC2C0', first: 'TFM', second: 'Telefonia', third: 'Palestra',fourth:'Telefonia', day: 'Segunda-Feira' },
    { bottom: '#0CABA8', first: '2', second: '8', third: '36',fourth:'', day: 'Terça-Feira' },
    { bottom: '#008F8C', first: '2', second: '8', third: '48',fourth:'', day: 'Quarta-Feira' },
    { bottom: '#015958', first: '3', second: '12', third: '72',fourth:'', day: 'Quinta-Feira' },
    { bottom: '#023535', first: '3', second: '12', third: '72',fourth:'', day: 'Sexta-Feira' },
  ];


  return (
    <section id="qts" className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className={styles.title}>
              <FontAwesomeIcon icon={faAlignRight} className="me-2" />
              QTS
            </h2>
            <h2 className={styles.subtitle}>Quadro de Trabalho Semanal</h2>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-end">
            <p className={styles.description}>
             Esteja ciente que o QTS pode ser alterado a qualquer momento, portanto confirme os horários e atividades com seu devido comandante de CIA
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {indClass.map((data, index) => (
              <div
                key={index}
                className="col-md-4 d-flex justify-content-center p-3"
              >
                <Card
                  bottom={data.bottom}
                  first={data.first}
                  second={data.second}
                  third={data.third}
                  day={data.day}
                  fourth={data.fourth}
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
