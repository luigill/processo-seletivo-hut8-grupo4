// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './styles.scss';
import imagemGenerica from '../../assets/camisetaRoxa.png';

export default function Item() {
  const [contador, setContador] = useState(0);

  const decrementarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="Item">
      <div className="itemCard">
        <img src={imagemGenerica} alt="Imagem genérica" />
        <div className="contador">
          <button onClick={decrementarContador}>-</button>
          <p>{contador}</p>
          <button onClick={incrementarContador}>+</button>
        </div>
      </div>
      <div className="itemDescription">
        <h3>Camisa genérica</h3>
        <p>R$ 45.00</p>
      </div>
    </div>
  );
}
