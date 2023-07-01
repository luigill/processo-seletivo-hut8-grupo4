import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { CartContext } from '../../context/CartContext';

export default function Item({ item, inModal }) {
  const [contador, setContador] = useState(0);
  const { addToCart } = useContext(CartContext);

  const decrementarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const incrementarContador = () => {
    setContador(contador + 1);
    addToCart(item, contador);
  };

  return (
    <div className={`Item ${inModal ? 'in-modal' : ''}`} key={item.id}>
      <div className="itemCard">
        <img src={item.imagem} alt="Imagem genérica" />
        {inModal ? null : (
          <div className="contador">
            <button onClick={decrementarContador}>-</button>
            <p>{contador}</p>
            <button onClick={incrementarContador}>+</button>
          </div>
        )}
      </div>
      <div className="itemDescription">
        <h3>{item.nome}</h3>
        <p>R$ {item.preco.toFixed(2)}</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired,
  }).isRequired,
  inModal: PropTypes.bool,
};

Item.defaultProps = {
  inModal: false,
};