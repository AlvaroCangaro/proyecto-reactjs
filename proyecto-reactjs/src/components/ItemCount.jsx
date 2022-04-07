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
                <Button className="Decremento buttonC" onClick={Decrease} variant="danger">-</Button>
                <span className="counter_">{counter}</span>
                <Button className="Incremento buttonC" onClick={Increase} variant="success">+</Button>
                <div>
                    <Button className="Agregar buttonC" onClick={() => onAdd(counter)} variant="succes">Agregar al carro</Button>
                    <Button className="Reset buttonC" onClick={Reset}>Reset</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;