import React from 'react';
import styles from './Card.module.css';

const Card = React.memo(({ img, first, second, third, fourth, bottom, day }) => {
  return (
    <div className={`card border-0 ${styles.card}`}>
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <img
            src={img}
            className={styles.calendar}
            alt="imagem de calendario"
          />
        </div>
        <div className="d-flex justify-content-center">
          <h4 className={styles.week}>1° - 2°: {first}</h4>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <p className={styles.week}>3° - 4°: {second}</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className={styles.week}>5° - 6°: {third}</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className={styles.week}>7° - 8°: {fourth}</p>
        </div>
      </div>
      <div
        className="card-footer border-0 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: bottom, height: '6.6vh' }}
      >
        <h4 className={styles.price}>{day}</h4>
      </div>
    </div>
  );
});

export default Card;
