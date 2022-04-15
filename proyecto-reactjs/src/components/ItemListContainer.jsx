import React, { useEffect, useState } from "react";
import customFetch from "./customFetch";
import './styles.css'
import { useParams } from "react-router-dom";
import productos from "./productos";
import ItemList from "./ItemList";

export default function ItemListContainer({ celular, funda, cargador, auricular}) {
    
    const [items, setItems] = useState ([]);

    const { categoryId } = useParams();

    console.log (categoryId);

    useEffect(() => {
        customFetch(500, productos, 'C', categoryId)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items, categoryId])
    
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