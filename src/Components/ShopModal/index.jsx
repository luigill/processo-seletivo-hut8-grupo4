import { useContext } from 'react';
import PropTypes from 'prop-types';
import Item from '../../Components/Items';
import { CartContext } from '../../context/CartContext';
import './styles.scss';

export default function ShopModal({ closeModal }) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const handleCheckout = () => {
    // Lógica para processar a compra dos itens no carrinho
    // ...
    if (cartItems.length === 0) {
      alert('Seu carrinho está vazio. Adicione itens antes de finalizar a compra.');
      return;
    }
  
    // Calcular o valor total da compra
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    // Exibir um resumo da compra
    alert(`Compra finalizada com sucesso!\nTotal: R$ ${total.toFixed(2)}`);
  };

  return (
    <div className="container">
      <div className="overlay container" onClick={closeModal} />
      <div id="login-modal" className="login-modal">
        <h1>Seus itens no carrinho:</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <Item item={item} onAddToCart={addToCart} />
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
        <button onClick={handleCheckout}>Finalizar compra</button>
      </div>
    </div>
  );
}

ShopModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
