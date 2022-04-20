import React, { useState } from 'react';
import ItemCount from './ItemCount';
import './styles.css';
import { Link } from 'react-router-dom';


export default function ItemDetail ({ producto }) {

    const [number, setNumber]=useState(0);
    
    // function onAdd(counter){
    //     alert("Se agregaron " + counter + " productos")
    // }

    function onAdd (counter) {
        setNumber(counter);
    }
    
    
    return (
        <>
            <div className='itemDetail'>
                <img src={producto.imagen} alt={producto.nombre} />
                <div>
                    <h2>{producto.nombre}</h2>
                    <h3>{producto.precio}</h3>
                    <p>{producto.descripcion}</p>
                    {  number===0 ? <ItemCount stock={11} onAdd={onAdd} />: <Link to='/Cart' className='botonDetalle'>Ir al carrito</Link> }
                </div>
            </div>
        </>
    );
};
