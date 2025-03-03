import React, { lazy, Suspense } from 'react';
import Home from './Home';
import QuemSou from './QuemSou';
import Plans from './Plans';
import Feedbacks from './Feedbacks';
import Footer from './Footer';
import Lideranca from './Lideranca'
import Atualidades from './Atualidades'

const Pages = () => {
  return (
    <>
      <Home />
      <QuemSou />
      <Plans />
      <Lideranca />
      <Feedbacks category='general' country='br' limit={10} />
      <Atualidades />
      <Footer />
    </>
  );
};

export default Pages;
