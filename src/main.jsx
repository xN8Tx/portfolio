import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import RootProvider from './provider/RootProvider.jsx';

import App from './app/App.jsx';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RootProvider>
      <App />
    </RootProvider>
  </BrowserRouter>,
);
