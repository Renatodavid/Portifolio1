import React from "react";
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-light ">
                <div className="container-fluid"> <a className="navbar-brand" href="index">
                    <img src="assets/img/renato.png" alt="Logo" style={{ width: "110px" }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://primeirositerecode.netlify.app/">Meu primeiro Site</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://agenciadeviagensrr.netlify.app/">Agencia de Viagens</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="https://pokemomc.netlify.app/">Pokemom</a>
                            </li>
                            <li className="nav-item">
                                <a className="E-commerce" href="https://redcomerce.netlify.app/">E-Commerce</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://advogacia.netlify.app/">Advocacia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://renatomarquesdavid.netlify.app/">Quem sou eu!</a>
                            </li>
                          

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


