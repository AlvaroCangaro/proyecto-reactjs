import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


export default function App() {
  
  return (
    <>
    <NavBar />
    
    <ItemListContainer celular={"Iphone 13 Pro Max"} funda={"Funda Silicone Iphone 13 Pro Max"} cargador={"MagSafe 20W"} auricular={"Airpods Pro"} />

    <ItemDetailContainer />



    </>
  );

}
