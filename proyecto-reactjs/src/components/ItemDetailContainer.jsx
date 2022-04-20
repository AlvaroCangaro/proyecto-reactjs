import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getItem } from './getItem';


export default function ItemDetailContainer () {

    const [producto, setProducto] = useState({});

    const { id } = useParams()

    useEffect(() => {
        getItem(id)
            .then((res) => {
                setProducto(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    );
}

