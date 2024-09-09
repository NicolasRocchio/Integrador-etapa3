import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-content">
          <div class="footer-logo">
            <img class="footer-img" src="/img/logo.webp" alt="" />
          </div>
          <div class="footer-nav">
            <h3>Navegación</h3>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/alta">Alta</Link>
              </li>
              <li>
                <Link to="/carrito">Carrito</Link>
              </li>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 Game Master Technology • All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
