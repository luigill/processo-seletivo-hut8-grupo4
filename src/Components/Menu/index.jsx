import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import user from "../../assets/User.svg";
import CarrinhoDeCompra from "../../assets/Shopping_Cart.svg";
import "./styles.scss";

export default function NavMenu() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname.split("/")[1];
    setCurrentPage(currentPath);
  }, []);

  return (
    <header>
      <img className="navLogo" src={logo} alt="logo" />
      <ul>
        <li>
          <a href="/" className={currentPage === "" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="/produtos" className={currentPage === "produtos" ? "active" : ""}>
            Produtos
          </a>
        </li>
        <li>
          <a href="/nossa-equipe" className={currentPage === "nossa-equipe" ? "active" : ""}>
            Nossa Equipe
          </a>
        </li>
        <li>
          <a href="#">
            <img className="iconMenu" src={CarrinhoDeCompra} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="iconMenu" src={user} alt="User" />
          </a>
        </li>
      </ul>
    </header>
  );
}
