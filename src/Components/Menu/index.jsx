import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/User.svg";
import CarrinhoDeCompra from "../../assets/Shopping_Cart.svg";
import LoginModal from "../../Components/LoginModal";
import ShopModal from "../../Components/ShopModal";
import menuResponsivo from "../../assets/menu-buguer-open.svg";
import "./styles.scss";

export default function NavMenu() {
  const [currentPage, setCurrentPage] = useState("");
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname.split("/")[1];
    setCurrentPage(currentPath);
  }, []);

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  const toggleCartModal = () => {
    setCartModalOpen(!cartModalOpen);
  };

  const toggleResponsiveMenu = () => {
    setShowResponsiveMenu(!showResponsiveMenu);
  };

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <header>
        <Link to="/" className="navLogo">
          <img src={logo} alt="logo" />
        </Link>
        <button className="buttonMobileMenu" onClick={toggleResponsiveMenu}>
          <img src={menuResponsivo} alt="Menu" />
        </button>
        <ul className={showResponsiveMenu ? "responsive-menu" : "desktop-menu"}>
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
            <a href="#" onClick={toggleCartModal}>
              <img className="iconMenu" src={CarrinhoDeCompra} alt="" />
            </a>
          </li>
          <li onClick={toggleLoginModal}>
            <a href="#">
              <img className="iconMenu" src={user} alt="User" />
            </a>
          </li>
        </ul>
      </header>
      {loginModalOpen && <LoginModal closeModal={toggleLoginModal} />}
      {cartModalOpen && (
        <ShopModal
          closeModal={toggleCartModal}
          cartItems={cartItems}
          setCartItems={setCartItems}
          addToCart={addToCart}
        />
      )}
    </>
  );
}
