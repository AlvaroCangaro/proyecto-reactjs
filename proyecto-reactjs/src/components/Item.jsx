import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ItemCount from "./ItemCount"


function Item({ prod }) {
    

    return (
        <>
            <div>
                <Card key={prod.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prod.imagen} />
                    <Card.Body>
                        <Card.Title>{prod.nombre}</Card.Title>
                        <Card.Text>
                            $ {prod.precio}
                        </Card.Text>
                        <ItemCount initial = {0} stock = {11} />
                        <Link to={`/item/${prod.id}`}>Ver detalle</Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Item