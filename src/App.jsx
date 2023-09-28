import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import MainRouter from './routes/MainRouter';
import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import { CartProvider } from './components/context/CartContext';

const App = () => {
 return (
   <CartProvider>
   
   
   
     
   <main> <MainRouter /> </main>

   
     
     
     
     </CartProvider>
     

 )
}

export default App