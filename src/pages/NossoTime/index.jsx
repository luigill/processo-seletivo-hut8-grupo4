import FooterMenu from "../../Components/Footer";
import NavMenu from "../../Components/Menu";
import Lui from "../../assets/membros/LuiGill.jpg"
import Marcus from "../../assets/membros/Marcus-Schebek.jpg"

import "./styles.scss";

export default function NossoTime(){
    return(
        <>
        <NavMenu/>
       <section className="membros">
        <div className="membro">
            <img src={Marcus} alt="Marcus" />
            <h2>Marcus Schebek</h2>
            <p>Programador</p>
        </div>
        <div className="membro">
            <img src={Lui} alt="Marcus" />
            <h2>Lui Gill</h2>
            <p>Programador</p>
        </div>
       </section>
        <FooterMenu/>
        </>
    );
}