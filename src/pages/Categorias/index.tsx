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
            <Link className="link" to="/produtos/camisetas">
              <li id="camisetas" className="card">
                <p>Camisetas</p>
              </li>
            </Link>
            <Link className="link" to="/produtos/canecas">
              <li id="canecas" className="card">
                <p>Canecas</p>
              </li>
            </Link>
            <Link className="link" to="/produtos/moletons">
              <li id="moletons" className="card">
                <p>Moletons</p>
              </li>
            </Link>
            <Link className="link" to="/produtos/broches">
              <li id="broches" className="card">
                <p>Broches</p>
              </li>
            </Link>
          </ul>
        </section>
        <FooterMenu />
      </section>
    </>
  );
}
