import React from "react";
import { Link } from "react-router-dom";
import FooterMenu from "../../Components/Footer";
import NavMenu from "../../Components/Menu";
import "./styles.scss";

export default function Categorias() {
  return (
    <>
      <section className="categoriaBody">
        <NavMenu />
        <section className="gridProdutos">
          <h2>Categorias</h2>
          <ul>
            <li id="camisetas" className="card">
              <Link className="link" to="/produtos/camisetas">Camisetas</Link>
            </li>
            <li id="canecas" className="card">
              <Link className="link" to="/produtos/canecas">Canecas</Link>
            </li>
            <li id="moletons" className="card">
              <Link className="link" to="/produtos/moletons">Moletons</Link>
            </li>
            <li id="broches" className="card">
              <Link className="link" to="/produtos/broches">Broches</Link>
            </li>
          </ul>
        </section>
        <FooterMenu />
      </section>
    </>
  );
}
