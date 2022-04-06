import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
const ItemCount = ({ initial, stock, onAdd }) => {

    const [counter, setCounter] = useState(initial);

    const Increase = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    };
    const Decrease = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }
    const Reset = () => {
        setCounter(1);
    }
    return (
        <>
            <div className="counter">
                <div className="counter_">{counter}</div>
                <Button className="Incremento buttonC" onClick={Increase} variant="success">+</Button>
                <Button className="Decremento buttonC" onClick={Decrease} variant="danger">-</Button>
                <Button className="Agregar buttonC" onClick={() => onAdd(counter)} variant="succes">Agregar al carro</Button>
                <Button className="Reset buttonC" onClick={Reset}>Reset</Button>
            </div>
        </>
    )
}

export default ItemCount;