import React from 'react';
import styles from './Footer.module.css';
import logo from '../imgs/logoWhite.webp';
import svg from '../imgs/viagemWhite.webp';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <section className={styles.section} id="students">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-4 mt-5">
              <img
                className={`${styles.svg}`}
                width="640"
                height="360"
                src={svg}
                alt="logo"
              />
              <img
                className={`${styles.mainLogo} ms-3`}
                src={logo}
                alt="logo"
                width="640"
                height="360"
              />
              <p className={`${styles.information}`}>seuemail@gmail.com</p>
              <p className={`${styles.information}`}>+55 99 99999-9999</p>
              <p className=" mt-4">
                <a>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: '#949fb5', marginLeft: '.5rem' }}
                    size="xl"
                  />
                </a>

                <a>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: '#949fb5', marginLeft: '.5rem' }}
                    size="xl"
                  />
                </a>
                <a>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: '#949fb5', marginLeft: '.5rem' }}
                    size="xl"
                  />
                </a>
                <a>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: '#949fb5', marginLeft: '.5rem' }}
                    size="xl"
                  />
                </a>
              </p>
            </div>
            <div className="col-md-4 mt-5">
              <h4 className={styles.subtitle}>Navegação</h4>

              <p className={styles.information}>
                <a href="#home" className="nav-link">
                  Home
                </a>
              </p>

              <p className={styles.information}>
                <a href="#hoami" className="nav-link">
                  Quem Sou
                </a>
              </p>

              <p className={styles.information}>
                <a href="#plans" className="nav-link">
                  Planos
                </a>
              </p>

              <p className={styles.information}>
                <a href="#feedbacks" className="nav-link">
                  Feedbacks
                </a>
              </p>
            </div>
            <div className="col-md-4 mt-5">
              <h4 className={styles.subtitle}>Área do aluno</h4>
              <form className="mt-5">
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className={`form-label ${styles.label}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={styles.inputForm}
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cpf" className={styles.label}>
                    CPF
                  </label>
                  <input type="cpf" className={styles.inputForm} id="cpf" />
                </div>
                <button type="submit" className={styles.buttonForm}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footer}></section>
    </>
  );
};

export default Footer;
