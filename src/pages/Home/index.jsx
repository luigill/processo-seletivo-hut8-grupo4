import FooterMenu from "../../Components/Footer";
import NavMenu from "../../Components/Menu";
import "./styles.scss";

export default function Home(){
    return(
        <>
        <NavMenu/>
        <div className="homeBanner">
            <div className="contentBanner">
            <h1>Empresa Junior da <br/> Computação - UFPel</h1>
            <p>Desenvolvemos soluções tecnológicas personalizadas e inovadoras por um melhor custo benefício, aproximando jovens universitários do mercado de trabalho.</p>
            <a href="https://www.instagram.com/hut8_jr/" target="_blank" rel="noreferrer"><button className="ButtonHome">Entre para a Hut!</button></a>
            </div>
        </div>
        <FooterMenu/>
        </>
    );
}