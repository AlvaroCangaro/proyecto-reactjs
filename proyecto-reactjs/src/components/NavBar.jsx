import React from "react";
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
                        <a className="navbar-brand" href="#">Apple Arg</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Celulares</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fundas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cargadores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Auriculares</a>
                            </li>
                            <li className="nav-item">
                                <CartWidget />
                            </li>
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