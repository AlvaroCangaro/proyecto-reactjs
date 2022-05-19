import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import './styles.css';




function Item({ prod }) {


    return (
        <>
            <div>
                <Card className='cardP' key={prod.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={prod.imagen} />
                    <Card.Body>
                        <Card.Title>{prod.nombre}</Card.Title>
                        <Card.Text>
                            <h5>${prod.precio}</h5>
                        </Card.Text>
                        <div>
                            <Link to={`/item/${prod.id}`} className="btn btn-primary btn-lg btn-block btnP">Ver producto</Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Item