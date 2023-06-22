import FooterMenu from "../../Components/Footer";
import NavMenu from "../../Components/Menu";
import Arrow from "../../assets/arrow.svg";
import Item from "../../Components/Items"
import camisetasJson from '../../assets/Camisetas.json';
import "./styles.scss";

export default function Shop(){
    const items = camisetasJson?.listaDeCamisetas?.items ?? [];

    return(
        <>
        <NavMenu/>
        <div className="titleShop"><img src={Arrow}/> <h1>Camisetas</h1></div>
        <section className="items">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </section>
        <FooterMenu/>
        </>
    );
}
