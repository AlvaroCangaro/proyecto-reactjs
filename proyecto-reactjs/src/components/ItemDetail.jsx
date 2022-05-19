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
        console.log(counter);
    }
    
    
    return (
        <>
            <div className='itemDetail'>
                <img className='imgD' src={producto.imagen} alt={producto.nombre} />
                <div>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.categoria}</p>
                    <p>{producto.descripcion}</p>
                    <h3>${producto.precio}</h3>
                    {  number===0 ? <ItemCount stock={70} onAdd={onAdd} producto={producto} />: <Link to='/Cart' className='botonDetalle btn btn-primary btn-lg btn-block'>Ir al carrito</Link> }
                </div>
            </div>
        </>
    );
};
