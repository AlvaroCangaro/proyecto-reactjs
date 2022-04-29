import React, { useEffect, useState } from "react";
import './styles.css'
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
// import { PromiseProductos } from "./PromiseProductos";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";

export default function ItemListContainer({ }) {

    const [items, setItems] = useState([]);

    const { categoryId } = useParams();


    useEffect(() => {

        const db = getFirestore()
        
        let productosRef;
        if (!categoryId) {
            productosRef = collection(db, 'productos');
        } else {
            productosRef = query(collection(db, 'productos'), where('category', '==', categoryId));
        }

        getDocs(productosRef).then((res) => {
            setItems(res.docs.map((p) => ({ id: p.id, ...p.data() })));
        })

    }, [categoryId])

    return (

        <>
            <h2 className="tittleP">Productos en stock</h2>
            <div className="itemsP">
                <ItemList producto={items} />
            </div>
        </>
    )
}