import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import MyWork from './components/MyWorks/MyWork';
import InvalidRoute from './components/InvalidRoute/InvalidRoute';
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/works" element={<MyWork />} />
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </React.StrictMode>
    ,
  </BrowserRouter>,
  document.getElementById('root')
);
