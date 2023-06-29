import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/User.svg";
import CarrinhoDeCompra from "../../assets/Shopping_Cart.svg";
import LoginModal from "../../Components/LoginModal"
import "./styles.scss";

export default function NavMenu() {
  const [currentPage, setCurrentPage] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname.split("/")[1];
    setCurrentPage(currentPath);
  }, []);

  return (
    <>
    <header>
      <Link to="/" className="navLogo">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/" className={currentPage === "" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/produtos"
            className={currentPage === "produtos" ? "active" : ""}
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            to="/nossa-equipe"
            className={currentPage === "nossa-equipe" ? "active" : ""}
          >
            Nossa Equipe
          </Link>
        </li>
        <li>
          <a href="#">
            <img className="iconMenu" src={CarrinhoDeCompra} alt="" />
          </a>
        </li>
        <li onClick={() => setModal(true)}>
          <a href="#">
            <img className="iconMenu" src={user} alt="User" />
          </a>
        </li>
      </ul>
    </header>
    {modal && <LoginModal closeModal={() => setModal(false)} />}
    </>
  );
}
