import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productos from './productos';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    const {id} = useParams()

    useEffect(()=>{
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos, id);
            });
        }, 1000);

        getItem.then((res) => setProducto(res));
        getItem.catch((err) => console.log(err));
    }, [id]);

    return (
        <>
        <ItemDetail producto={producto} />
        </>
    );
}

export default ItemDetailContainer