import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlJaDa5Lh8U5tjCPdrx7mov2wdCi2Z2lw",
  authDomain: "proyecto-reactjs-alvarocangaro.firebaseapp.com",
  projectId: "proyecto-reactjs-alvarocangaro",
  storageBucket: "proyecto-reactjs-alvarocangaro.appspot.com",
  messagingSenderId: "988240087270",
  appId: "1:988240087270:web:2185e154d7876af37b5327"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



