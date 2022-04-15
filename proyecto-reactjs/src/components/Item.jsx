import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount"


function Item({ id, nombre, precio, imagen }) {
    function onAdd(counter){
        alert("Se agregaron " + counter + " productos")
    }

    return (
        <>
            <div>
                <Card key={id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                            $ {precio}
                        </Card.Text>
                        <ItemCount initial = {0} stock = {11} onAdd = {onAdd}/>
                        <Link to={`/item/${id}`}>Ver detalle</Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Item