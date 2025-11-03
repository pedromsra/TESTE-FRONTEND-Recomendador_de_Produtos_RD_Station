import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals((metric) => {
  //Definir um destino para as métricas de web vitals: GTM, Analytics, LOG, DataDot...
  console.info(`[Web Vitals] ${metric.name}: ${metric.value}`);
});
