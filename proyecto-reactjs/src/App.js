import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import CartCheckout from "./components/CartCheckout";



export default function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path="/checkOut" element= {<CartCheckout />} />
            <Route path="/Cart" element={<Cart />} />

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );

}
