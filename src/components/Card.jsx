import React from 'react';
import styles from './Card.module.css';

const Card = React.memo(({ img, week, month, semester, bottom, price }) => {
  return (
    <div className={`card border-0 ${styles.card}`}>
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <img
            width="86"
            height="86"
            src={img}
            className={styles.calendar}
            alt="imagem de calendario"
          />
        </div>
        <div className="d-flex justify-content-center">
          <h4 className={styles.week}>{week}x por semana</h4>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <p className={styles.description}>{month} aulas por mês</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className={styles.description}>{semester} por semestre</p>
        </div>
      </div>
      <div
        className="card-footer border-0 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: bottom, height: '6.6vh' }}
      >
        <h4 className={styles.price}>R$ {price} mensais </h4>
      </div>
    </div>
  );
});

export default Card;
