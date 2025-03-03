import React, { memo } from 'react';
import styles from './Feedback.module.css';
const FeedbackItem = memo(({ img, title, description }) => {
  return (
    <div className={styles.feedback}>
      <div className="container">
        <div className={styles.content}>
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <img className={styles.depoiment} src={img} alt={title} />
            </div>
            <div className="col-md-8 mt-2">
              <h2 className={styles.name}>{title}</h2>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FeedbackItem;
