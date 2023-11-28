import React, { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Carregamento dos componentes de forma lazy
const Pages = lazy(() => import('./components/Pages'));
const Form = lazy(() => import('./components/Form'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/formulario" element={<Form />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
