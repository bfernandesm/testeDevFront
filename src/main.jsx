import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
