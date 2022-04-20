import React, { useEffect, useState } from "react";
import './styles.css'
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { PromiseProductos } from "./PromiseProductos";

export default function ItemListContainer({}) {
    
    const [items, setItems] = useState ([]);

    const { categoryId } = useParams();

    console.log (categoryId);

    useEffect(() => {
        PromiseProductos(categoryId)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [categoryId])
    
    return (
        
        <>
        {/* <h2 className="tittleP">Productos en stock</h2>
        <ul className="list">
            <li>{celular}</li>
            <li>{funda}</li>
            <li>{cargador}</li>
            <li>{auricular}</li>
        </ul> */}
        <h2 className="tittleP">Productos en stock</h2>
        <div className="itemsP">
            <ItemList producto={items} />
        </div>
        </>
    )
}