import React, { Suspense, lazy, useEffect, useState } from 'react';
import Pages from './components/Pages';
import Form from './components/Form';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Pages />} />
        <Route path="/formulario" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
