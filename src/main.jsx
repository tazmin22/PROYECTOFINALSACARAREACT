import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbXN0n3Cnoz4i25FSPzoAGPlV0F5qOZeY",
  authDomain: "tienda-on-line-d6c63.firebaseapp.com",
  projectId: "tienda-on-line-d6c63",
  storageBucket: "tienda-on-line-d6c63.appspot.com",
  messagingSenderId: "240712363149",
  appId: "1:240712363149:web:1a83c63527b183af6506c4"
};
 initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
