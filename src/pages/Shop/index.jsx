import FooterMenu from "../../Components/Footer";
import NavMenu from "../../Components/Menu";
import Arrow from "../../assets/arrow.svg"
import Item from "../../Components/Items"
import "./styles.scss";

export default function Shop(){
    
    return(
        <>
        <NavMenu/>
        <div className="titleShop"><img src={Arrow}/> <h1>Camisetas</h1></div>
        <section className="items">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </section>
        <FooterMenu/>
        </>
    );
}