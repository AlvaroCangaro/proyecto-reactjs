import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";


export default function ItemDetailContainer() {

    const [producto, setProducto] = useState({});

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const detailRef = doc(db, "productos", id)
        getDoc(detailRef).then(res => { setProducto({ id: res.id, ...res.data() }) })
    }, [id]);



    return (
        <>
            <ItemDetail producto={producto} />
        </>
    );
}

