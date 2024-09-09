import React from "react";
import useTitulo from "../hooks/useTitulo";
import "./Contacto.scss";
import "../components/Buttons.scss";

const Contacto = () => {
  useTitulo("Contacto");
  return (
    <>
      <main>
        <section className="title">
          <h1>Contáctanos</h1>
        </section>

        <section className="contact-cards what-we-do">
          <div className="services">
            <div className="service">
              <img className="svg" src="/img/phone-solid.svg" alt="" />
              <h3>0800-123-4567</h3>
              <p>
                ¿Necesitas ayuda con tus videojuegos? Llama gratis al numero
                brindado para asesoría personalizada
              </p>
              <a href="/index.html" className="button-grey">
                Aprende más
              </a>
            </div>
            <div className="service">
              <img className="svg" src="/img/envelope-solid.svg" alt="" />
              <h3>help@gamemaster.com</h3>
              <p>
                ¡Sumérgete en el juego perfecto! Escríbenos y desata todo el
                potencial de tu experiencia de juego.
              </p>
              <a href="#" className="button-grey">
                Aprende más
              </a>
            </div>
            <div className="service">
              <img className="svg-2" src="/img/location-dot-solid.svg" alt="" />
              <h3>Servicio al Cliente de Primera Clase</h3>
              <p>
                Encuéntranos en nuestro local principal: Av. Gamer 123, San
                Miguel de Tucuman. ¡Visítanos y déjate llevar por el mundo de
                los videojuegos!
              </p>
              <a href="#" className="button-grey">
                Aprende más
              </a>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <h2>Contáctanos</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Numero" />
            <input type="text" placeholder="Nombre" />
            <textarea placeholder="Texto" cols="30" rows="10"></textarea>
            <button className="button-grey">Enviar</button>
          </form>
        </section>

        <section className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28483.67312626012!2d-65.21605641015626!3d-26.825345097763748!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1717885808381!5m2!1ses-419!2sar"
            className="map__iframe"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section className="newsletter">
          <h2>Nuestro Newsletter</h2>
          <form>
            <input type="email" placeholder="Email" />
            <button className="button-orange">Enviar</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contacto;
