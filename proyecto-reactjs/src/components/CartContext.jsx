import React, { createContext, useState } from 'react'

export const Cartcontext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (producto) => {
        const indiceItem = cart.findIndex((cartItem) => cartItem.id === producto.id);
        if (indiceItem !== -1) {
            const newCart = [...cart];
            newCart[indiceItem].cantidad =
                newCart[indiceItem].cantidad + producto.cantidad;
            setCart(newCart);
        } else {
            setCart([...cart, producto]);
        }
    };
    console.log(cart);

    const removeItem = (id) => {
        setCart(cart.filter((producto) => producto.id !== id));
    };

    const clear = () => setCart([]);

    return (
        <>
            <Cartcontext.Provider value={{ cart, addItem, removeItem, clear }}>
                {children}
            </Cartcontext.Provider>
        </>
    );
};

export default CartContextProvider; 