import React, { useEffect, useState } from "react";
import customFetch from "./customFetch";
import './styles.css'
import productos from "./productos";
import ItemList from "./ItemList";

export default function ItemListContainer({ celular, funda, cargador, auricular}) {
    
    const [items, setItems] = useState ([]);

    useEffect(() => {
        customFetch(2000, productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items])

    // function onAdd(counter){
    //     alert("Se agregaron " + counter + " productos")
    // }
    
    return (
        
        <>
        <h2 className="tittleP">Productos en stock</h2>
        <ul className="list">
            <li>{celular}</li>
            <li>{funda}</li>
            <li>{cargador}</li>
            <li>{auricular}</li>
        </ul>
        
        <div className="itemsP">
            <ItemList productos={items} />
        </div>
        </>
    )
}