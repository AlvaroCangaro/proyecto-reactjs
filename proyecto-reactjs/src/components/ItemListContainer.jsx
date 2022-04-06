import React from "react";
import ItemCount from "./ItemCount";
import './styles.css'

export default function ItemListContainer({ celular, funda, cargador, auricular}) {
    
    function onAdd(counter){
        alert("Se agregaron " + counter + " productos")
    }
    
    return (
        
        <>
        <h2 className="tittleP">Productos en stock</h2>
        <ul className="list">
            <li>{celular}</li>
            <li>{funda}</li>
            <li>{cargador}</li>
            <li>{auricular}</li>
        </ul>
        <ItemCount initial = {0} stock = {11} onAdd = {onAdd}/>
        </>
    )
}