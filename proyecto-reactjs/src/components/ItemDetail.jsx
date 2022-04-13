import React from 'react';
import ItemCount from './ItemCount';
import './styles.css';


const ItemDetail = ({ producto }) => {

    function onAdd(counter){
        alert("Se agregaron " + counter + " productos")
    }
    
    return (
        <>
            <div className='itemDetail'>
                <img src={producto.imagen} alt={producto.nombre} />
                <div>
                    <h2>{producto.nombre}</h2>
                    <h3>{producto.precio}</h3>
                    <p>{producto.descripcion}</p>
                    <ItemCount initial = {0} stock = {11} onAdd = {onAdd}/>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;