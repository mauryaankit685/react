import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {NetFlixRegister} from './components/NetflixRegister';
import {NetflixIndex} from './components/NetflixIndex';
import {FakeProduct} from './components/FakeProduct';
import {FormComponent} from './components/FormComponent';
import RegistrationForm from './components/RegistrationFrom';
import ParentComponent from './components/ParentComponent';
import FormikComponent from './components/FormikComponent';
import DigitalClock from './components/DigitalClock';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <ParentComponent/> */}
    {/* <FakeProduct/> */}
    {/* <NetflixIndex/> */}
    {/* <RegistrationForm/> */}
    {/* <FormikComponent/> */}
    {/* <DigitalClock/> */}
    {/* <Header></Header> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Footer/> */}
  </React.StrictMode>

  



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
