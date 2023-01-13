import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
      apiKey: "AIzaSyD83lEtW9KYAglHUhP7luEfo7xefr_tq14",
      authDomain: "proyecto-baker-e-comerce.firebaseapp.com",
      projectId: "proyecto-baker-e-comerce",
      storageBucket: "proyecto-baker-e-comerce.appspot.com",
      messagingSenderId: "140021039537",
      appId: "1:140021039537:web:be30fbd94afae6bac47d90"
    };


    initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 
      <App />
  
);


