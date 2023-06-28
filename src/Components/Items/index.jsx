// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import camisetasData from '../../assets/database/Camisetas.json';

export function Camisetas() {
  return (
    <div>
       {camisetasData && Array.isArray(camisetasData) && camisetasData.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

import canecasData from '../../assets/database/Canecas.json';

export function Canecas() {
  return (
    <div>
      {canecasData && canecasData.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

import moletonsData from '../../assets/database/Moletons.json';

export function Moletons() {
  return (
    <div>
      {moletonsData && moletonsData.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

import brochesData from '../../assets/database/Broches.json';

export function Broches() {
  return (
    <div>
      {brochesData && brochesData.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default function Item({ item }) {
  const [contador, setContador] = useState(0);

  const decrementarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  console.log(item);

  return (
    <div className="Item" key={item.id}>
      <div className="itemCard">
        <img src={item.imagem} alt="Imagem genérica" />
        <div className="contador">
          <button onClick={decrementarContador}>-</button>
          <p>{contador}</p>
          <button onClick={incrementarContador}>+</button>
        </div>
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
};
