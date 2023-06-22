import "./styles.scss";
import logoFooter from '../../assets/LogoFooter.png';
import twitterLogo from '../../assets/twitter-logo.svg';
import facebookLogo from '../../assets/facebook-logo.svg';
import instagramLogo from '../../assets/instagram-logo.svg';
import linkedinLogo from '../../assets/linkedin-logo.svg';



export default function FooterMenu() {
  return (
    <footer>
      <section className="bottom-menu">
        <div className="footer-img">
          <img src={logoFooter} alt="logo"/>
        </div>
        <nav className="footer-links">
          <a aria-current="page" href="#">Home</a>
          <a href="#">Projetos</a>
          <a href="#">Nossa equipe</a>
        </nav>
        <div className="footer-address">
        <a href="https://goo.gl/maps/BkRpd2Ur1aRjKQXD9" target="_blank" rel="noreferrer"><p>Rua Gomes Carneiro, nº 1</p><p>Centro - CEP: 96010-610</p><p>Pelotas, RS - Brasil</p></a>
        </div>
        <div className="footer-network">
          <div className="findUs"><p>Encontre a gente nas redes</p></div>
          <div className="network-logos">
            <a href="#"><img className="networkIcon" src={twitterLogo} alt="Twitter"/></a>
            <a href="#"><img className="networkIcon" src={facebookLogo} alt="Facebook"/></a>
            <a href="#"><img className="networkIcon" src={instagramLogo} alt="Instagram"/></a>
            <a href="#"><img className="networkIcon" src={linkedinLogo} alt="Linkedin"/></a>

          </div>
        </div>
      </section>
      <div className="bottom-rights">
        <p>Todos os direitos reservados.©</p>
      </div>
    </footer>
  );
}
