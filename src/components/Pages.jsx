import React, { lazy, Suspense } from 'react';
import Home from './Home';
import QuemSou from './QuemSou';
import Plans from './Plans';
import Feedbacks from './Feedbacks';
import Footer from './Footer';

const Pages = () => {
  return (
    <>
      <Home />
      <QuemSou />
      <Plans />
      <Feedbacks />
      <Footer />
    </>
  );
};

export default Pages;
