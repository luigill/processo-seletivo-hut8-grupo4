import PropTypes from 'prop-types';
import FooterMenu from '../../Components/Footer';
import NavMenu from '../../Components/Menu';
import Arrow from '../../assets/arrow.svg';
import Item from '../../Components/Items';
import camisetasData from '../../assets/database/Camisetas.json';
import canecasData from '../../assets/database/Canecas.json';
import moletonsData from '../../assets/database/Moletons.json';
import brochesData from '../../assets/database/Broches.json';
import './styles.scss';

export default function Shop({ category }) {
  let items = [];

  switch (category) {
    case 'camisetas':
      items = camisetasData.Camisetas.items;
      break;
    case 'canecas':
      items = canecasData.Canecas.items;
      break;
    case 'moletons':
      items = moletonsData.Moletons.items;
      break;
    case 'broches':
      items = brochesData.Broches.items;
      break;
    default:
      break;
  }

  return (
    <>
      <NavMenu />
      <div className="titleShop">
        <img src={Arrow} alt="Seta para trás" />
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      </div>
      <section className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
      <FooterMenu />
    </>
  );
}

Shop.propTypes = {
  category: PropTypes.string.isRequired,
};
