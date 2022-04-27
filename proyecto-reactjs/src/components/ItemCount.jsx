import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import { useContext } from 'react';

export default function ItemCount ({ stock, onAdd, producto }) {

    const [counter, setCounter] = useState(0);

    const {addItem}= useContext(CartContext);

    const Increase = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    };
    const Decrease = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    function handleClick() {
        onAdd(counter)
        addItem({...producto, cantidad: counter})
    }

    const Reset = () => {
        setCounter(1);
    }

    return (
        <>
            <div className="counter">
                <Button className="Decremento buttonC" onClick={Decrease} variant="danger">-</Button>
                <span className="counter_">{counter}</span>
                <Button className="Incremento buttonC" onClick={Increase} variant="success">+</Button>
                <div>
                    <Button className="Agregar buttonC" onClick={handleClick} variant="succes">Agregar al carro</Button>
                    <Button className="Reset buttonC" onClick={Reset}>Reset</Button>
                </div>
            </div>
        </>
    )
}
