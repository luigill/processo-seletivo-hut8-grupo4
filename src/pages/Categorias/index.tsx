import React from "react";
import FooterMenu from "../../Components/Footer";
import NavMenu from "../../Components/Menu";
import "./styles.scss";

export default function Categorias(){
    return(
        <>
        <NavMenu/>
        <section>
            <h2>Categorias</h2>
                <ul>
                    <li id="camisetas" className="card">Camisetas</li>
                    <li id="canecas" className="card">Canecas</li>
                    <li id="moletons" className="card">Moletons</li>
                    <li id="broches" className="card">Broches</li>
                </ul>
        </section>
        <FooterMenu/>
        </>
    );
}