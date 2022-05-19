import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Button } from "react-bootstrap";


export default function NavBar() {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to='/'><img src="img/apple.png" className="logoNavbar" alt="apple-arg" /></Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to='/' className="nav-item nav-link active">
                                Inicio
                            </Link>
                            <Link to='/category/celulares' className="nav-item nav-link">
                                Celulares
                            </Link>
                            <Link to='/category/fundas' className="nav-item nav-link">
                                Fundas
                            </Link>
                            <Link to='/category/cargadores' className="nav-item nav-link">
                                Cargadores
                            </Link>
                            <Link to='/category/auriculares' className="nav-item nav-link">
                                Auriculares
                            </Link>
                            <li className="nav-item">
                                <CartWidget />
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <Button variant="primary">Buscar</Button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}