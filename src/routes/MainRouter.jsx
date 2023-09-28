import React from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "../components/pages/home";
 import Category from "../components/pages/Category";
 import NavBarComponent from "../components/NavBarComponents/NavBarComponents";
 import ItemDetails from "../components/pages/ItemDetails";

const MainRouter = () => {

     return (
        <BrowserRouter>
          < NavBarComponent />
         <Routes>
         <Route path="/" element={< Home />}></Route>
       
         <Route path="/category/:categoryName" element={<Category />} />
         <Route path="/item/:productId" element={<ItemDetails />} />
           
         
        </Routes>
         </BrowserRouter>
    )
    
 }

 export default MainRouter
