import React, { lazy, Suspense } from 'react';

// Carregamento dos componentes de forma lazy
const LazyHome = lazy(() => import('./Home'));
const LazyQuemSou = lazy(() => import('./QuemSou'));
const LazyPlans = lazy(() => import('./Plans'));
const LazyFeedbacks = lazy(() => import('./Feedbacks'));
const LazyFooter = lazy(() => import('./Footer'));

const Pages = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <LazyHome />
      <LazyQuemSou />
      <LazyPlans />
      <LazyFeedbacks />
      <LazyFooter />
    </Suspense>
  );
};

export default Pages;
