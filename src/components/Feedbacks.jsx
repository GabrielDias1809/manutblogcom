import styles from './Feedbacks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Feedback from './Feedback';
import React, { useEffect, useState } from "react";
import tecnologia from '../imgs/tecnologia.jpeg'
import pratico from '../imgs/pratico.jpeg'
import alistamentofem from '../imgs/alistamentofem.jpg'



const Feedbacks = ({category = "general", country = "br", limit = 10}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:3500,
    pauseOnHover:true,
  };
  
  const news = [
{img: tecnologia, title: 'Exército e Governo de São Paulo firmam parceiria em Ciência, Tecnologia e Inovação', description:' O Exército Brasileiro, por intermédio do Departamento de Ciência e Tecnologia (DCT), e o Governo do Estado de São Paulo firmaram, no dia 12 de março, um protocolo de intenções com o objetivo de fortalecer e expandir as parcerias nas áreas de Ciência, Tecnologia e Inovação. A iniciativa visa a criação de um ambiente colaborativo para o desenvolvimento de projetos que envolvem tanto o setor público quanto o setor militar, alinhando os interesses institucionais e as políticas nacionais de defesa.'},
{img: pratico, title:'Brigada conduz Exercício Prático de Mobilidade e Vias de Acesso no RJ', description: 'O Grupamento de Unidades Escola da 9ª Brigada de Infantaria Motorizada (GUEs/9ª Bda Inf Mtz), por meio do 57º Batalhão de Infantaria Motorizado (Escola), realizou no Campo de Instrução de Gericinó (CIG), no Rio de Janeiro/RJ, uma importante demonstração de corredores de mobilidade e vias de acesso para os alunos do Curso de Aperfeiçoamento de Oficiais (CAO) da Escola de Aperfeiçoamento de Oficiais (EsAO).'},
{img: alistamentofem, title:'Mais de 26 mil mulheres se alistaram para o Serviço Militar Inicial Feminino', description:'O alistamento para o Serviço Militar Inicial Feminino é algo inédito no Brasil. Apesar de não ser obrigatório, ele tem atraído grande procura da população feminina. Desde o dia 1º de janeiro, mais de 26 mil mulheres se alistaram para o processo de seleção, demonstrando o interesse em servir ao País e incorporar-se às Forças Armadas. O período para o alistamento, tanto para homens como para mulheres, segue até 30 de junho deste ano, com 1.500 vagas abertas a mulheres que completam 18 anos em 2025 e almejam incorporar como soldados.'}
  ]
  

  return (
    <section id="noticias" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          <FontAwesomeIcon icon={faAlignRight} /> Notícias
        </h2>
        <h2 className={styles.subtitle}>O que está acontendo...</h2>
        <Slider {...settings} className="mb-5">
          {news.map((data,index) => (
            <div key={index}>
              <Feedback 
              img = {data.img}
              title = {data.title}
              description = {data.description}
            />
          </div>
          ))}
          
        </Slider>
      </div>
    </section>
  );
};

export default Feedbacks;
