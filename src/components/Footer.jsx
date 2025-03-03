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
      
      <section className={styles.footer}>© 2025 Gabriel Dias. Todos os direitos reservados.
      </section>
    </>
  );
};

export default Footer;
