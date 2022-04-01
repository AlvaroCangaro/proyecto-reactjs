import React from "react";
import './styles.css'

export default function ItemListContainer({ celular, funda, cargador, auricular}) {
    
    
    return (
        
        
        <>
        <h2 className="tittleP">Productos en stock</h2>
        <ul className="list">
            <li>{celular}</li>
            <li>{funda}</li>
            <li>{cargador}</li>
            <li>{auricular}</li>
        </ul>
        
        </>
    )
}