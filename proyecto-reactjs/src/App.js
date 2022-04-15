import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route path='/' element={<ItemListContainer celular={"Iphone 13 Pro Max"} funda={"Funda Silicone Iphone 13 Pro Max"} cargador={"MagSafe 20W"} auricular={"Airpods Pro"} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer celular={"Iphone 13 Pro Max"} funda={"Funda Silicone Iphone 13 Pro Max"} cargador={"MagSafe 20W"} auricular={"Airpods Pro"} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />}/>

        </Routes>
      </BrowserRouter>
    </>
  );

}
