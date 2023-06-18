import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Error from '../pages/Error';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
