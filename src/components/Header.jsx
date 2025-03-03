import React from 'react';
import svg from '../imgs/logocom.png';
import svgazul from '../imgs/logozaul.png'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ formHeader }) => {
  // muda a cor do Header ao dar scroll
  const [fixed, setFixed] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [botaoDesativado, setBotaoDesativado] = React.useState(false);
  const changeNavbarFixed = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener('scroll', changeNavbarFixed);

  //fecha o header no mobile se clicar em link
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
    });
  });

  //scroll suave até a section
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    const topo = section.offsetTop - 150;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
    if (href === '#home') {
      setMenu(false);
    }
  }
  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });

  //mudar a cor do header se ele estiver com collapse
  function handleClick(event) {
    event.preventDefault();

    if (!botaoDesativado) {
      // Desativa o botão
      setBotaoDesativado(true);

      setMenu(!menu);

      // Reativa o botão após um certo período de tempo (por exemplo, 1 segundo)
      setTimeout(() => {
        setBotaoDesativado(false);
      }, 500); // 1000 milissegundos = 1 segundo
    }
  }
  return (
    <nav
      className={`navbar navbar-expand-lg ${styles.nav} fixed-top ${
        fixed || menu ? styles.navbarBg : ''
      } js-menu`}
      id="nav"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img className={`${styles.svg} ms-5`} src={`${fixed || menu ? svgazul : svg}`} alt="logo" />
        </a>
        <button
          className={"navbar-toggler"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="collapser"
          onClick={handleClick}
          disabled={botaoDesativado}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                 História
                </Link>
              ) : (
                <a className={`${
                  fixed || menu ? styles.navlinktoggle : 'nav-link'
                }`} aria-current="page" href="#hoami">
                  História
                </a>
              )}
            </li>
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                 QTS
                </Link>
              ) : (
                <a className={`${
                  fixed || menu ? styles.navlinktoggle : 'nav-link'
                }`} aria-current="page" href="#qts">
                  QTS
                </a>
              )}
            </li>
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                 Liderança
                </Link>
              ) : (
                <a className={`${
                  fixed || menu ? styles.navlinktoggle : 'nav-link'
                }`} aria-current="page" href="#lideranca">
                 Liderança
                </a>
              )}
            </li>
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                 Notícias
                </Link>
              ) : (
                <a className={`${
                  fixed || menu ? styles.navlinktoggle : 'nav-link'
                }`} aria-current="page" href="#noticias">
                 Notícias
                </a>
              )}
            </li>
            <li className="nav-item">
              {formHeader ? (
                <Link className="nav-link" aria-current="page" to="/">
                  Atualidades
                </Link>
              ) : (
                <a className={`${
                  fixed || menu ? styles.navlinktoggle : 'nav-link'
                }`} aria-current="page" href="#atualidades">
                  Atualidades
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
