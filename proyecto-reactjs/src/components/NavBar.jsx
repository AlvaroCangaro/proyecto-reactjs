import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


export default function NavBar() {

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to='/'>Apple Arg</Link>
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
                            <Link to='/category/carro' className="nav-item">
                                <CartWidget />
                            </Link>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}