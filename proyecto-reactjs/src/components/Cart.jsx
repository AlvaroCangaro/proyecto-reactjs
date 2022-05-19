import React, { useContext } from 'react';
import { CartContext } from "./CartContext";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './cart-styles.css'

export default function Cart() {
    const { cart, clear, removeItem } = useContext(CartContext)
    const total = [""]

    return (
        <>

            <main className="page">
                <section className="shopping-cart">
                    <div className="container">
                        <div className="block-heading">
                            <h2>Carro</h2>
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-12 col-lg-8">
                                    <div className="items">
                                        {cart.length !== 0 ? (
                                            cart.map((p) => {
                                                const subtotal = parseInt(p.cantidad) * parseInt(p.precio)
                                                total.push(subtotal)

                                                return (
                                                    <div key={p.id} className="product">
                                                        <div className="row2">
                                                            <div className="col-md-3">
                                                                <img className="img-fluid mx-auto d-block image" src={p.imagen} />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="info">
                                                                    <div className="row2">
                                                                        <div className="col-md-5 product-name">
                                                                            <div className="product-name">
                                                                                <h4 className='cart-name'>{p.nombre}</h4>
                                                                                {/* <div className="product-info">
                                                                                    <div>Descripcion: <span className="value">{p.descripcion}</span></div>
                                                                                </div> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4 quantity">
                                                                            <label for="quantity">Cantidad</label>
                                                                            <div id="quantity" className="form-control quantity-input" >{p.cantidad}</div >
                                                                        </div>
                                                                        <div className="price col-md-3">
                                                                            <span>$ {p.precio}</span>
                                                                        </div>
                                                                        <div className="col-md-2">
                                                                            <FontAwesomeIcon className='removeC' onClick={() => removeItem(p)} icon={faTrashCan} />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        ) : (

                                            <>
                                                <section>
                                                    <div className="container pt-5 mt-5">
                                                        <h1>Parece que el carro está vacío</h1>
                                                        <p>Explora nuestros productos para llevarte lo que mas te guste</p>
                                                        <Button>
                                                            <Link className='buttonI' to="/">Volver al inicio</Link>
                                                        </Button>
                                                    </div>
                                                </section>
                                            </>
                                        )}

                                    </div>

                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="summary">
                                        <h3>Resumen</h3>
                                        <div className="summary-item"><span className="text">Total</span><span className="price">$ {total.reduce((prev, next) => (+prev) + (+next))}</span></div>
                                        {/* <Button as={Link} to='/checkOut' variant="outline-success" className="btn btn-primary btn-lg btn-block">Pagar</Button> */}
                                        <div>
                                            
                                            {cart != 0 ? (
                                                <Link to="/checkOut" className="btn btn-primary btn-lg btn-block">Pagar</Link>
                                            ) : (
                                                "Carro vacio"
                                            )}
                                        </div>
                                        <div>
                                            <Link to="/" className="btn btn-primary btn-lg btn-block">Seguir Comprando</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>

        </>
    )
}