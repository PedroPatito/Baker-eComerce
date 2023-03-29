import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
      apiKey: "project key",
      authDomain: "project authdomain",
      projectId: "project id",
      storageBucket: "project storagebucket",
      messagingSenderId: "project messaging sender id",
      appId: "project appid"
    };


    initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 
      <App />
  
);


