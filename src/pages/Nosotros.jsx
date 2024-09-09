import React from "react";
import useTitulo from "../hooks/useTitulo";
import "./Nosotros.scss";
import { Link } from "react-router-dom";

const Nosotros = () => {
  useTitulo("Nosotros");
  return (
    <>
      <main>
        <section className="nosotros">
          <div className="container">
            <div className="imagenes">
              <img
                src="/img/Default_An_illustration_of_a_vibrant_digital_world_full_of_lif_2.webp"
                alt=""
              />
              <img
                src="/img/Default_An_image_of_a_group_of_friends_gathered_around_a_video_3.webp"
                alt=""
              />
              <img
                src="/img/Default_An_image_showing_people_of_different_ages_and_backgrou_3.webp"
                alt=""
              />
              <img
                src="/img/Default_An_image_of_friendly_and_efficient_customer_service_sy_1.webp"
                alt=""
              />
            </div>
            <div className="texto">
              <h2>Nuestra Historia</h2>
              <p>
                La idea de crear GameMaster nació en 2020, en medio de una
                charla entre amigos apasionados por los videojuegos. Nuestro
                fundador, Nicolas Rocchio, un ávido gamer desde su infancia, se
                dio cuenta de que existía una necesidad en el mercado: una
                plataforma que no solo ofreciera los últimos lanzamientos, sino
                que también proporcionara una experiencia de compra
                personalizada y un servicio al cliente excepcional. Con esta
                visión en mente, Nicolas reunió a un equipo de entusiastas de
                los videojuegos y expertos en tecnología para dar vida a
                GameMaster.
              </p>

              <h2>Misión y Visión</h2>
              <p>
                Nuestra misión es convertirnos en la tienda de videojuegos en
                línea preferida por gamers de todo el mundo, ofreciendo una
                amplia selección de títulos para todas las plataformas y
                brindando un servicio al cliente de primera clase. Nos
                esforzamos por crear una comunidad donde los jugadores puedan
                descubrir, compartir y disfrutar de sus juegos favoritos.
              </p>
              <p>
                Nuestra visión es revolucionar la manera en que se compran
                videojuegos, proporcionando una plataforma innovadora que se
                adapte a las necesidades cambiantes de nuestros clientes.
                Queremos ser más que una tienda; aspiramos a ser una parte
                esencial del viaje de cada gamer.
              </p>

              <h2>Nuestros Valores</h2>
              <p>
                <b>Pasión por los Juegos:</b> En GameMaster, todos compartimos
                una pasión ardiente por los videojuegos. Desde la selección de
                títulos hasta el servicio al cliente, esta pasión impulsa todo
                lo que hacemos.
              </p>
              <p>
                <b>Innovación:</b> En GameMaster, nos mantenemos a la vanguardia
                de la tecnología y las tendencias de la industria. Siempre
                buscamos ofrecer lo mejor a nuestra comunidad de gamers.
              </p>
              <p>
                <b>Comunidad:</b> Valoramos a nuestra comunidad de gamers y nos
                esforzamos por crear un espacio inclusivo y acogedor para todos.
                En GameMaster, todos son bienvenidos.
              </p>
              <p>
                <b>Calidad y Servicio:</b> Nos comprometemos a proporcionar
                productos y servicios de alta calidad. Cada compra en GameMaster
                es una experiencia positiva, asegurándonos de superar tus
                expectativas.
              </p>

              <h2>Nuestro Compromiso</h2>
              <p>
                <b>Amplia Selección de Videojuegos:</b> En GameMaster,
                encontrarás una amplia gama de videojuegos para todas las
                plataformas y edades. Desde los últimos lanzamientos hasta los
                clásicos favoritos, tenemos lo que necesitas para disfrutar al
                máximo.
              </p>
              <p>
                <b>Descripciones Detalladas y Reseñas:</b> Nuestro compromiso en
                GameMaster es proporcionarte descripciones detalladas y reseñas
                de productos para que puedas tomar decisiones informadas.
                Queremos que compres con confianza y encuentres el juego
                perfecto para ti.
              </p>
              <p>
                <b>Servicio al Cliente de Calidad:</b> En GameMaster, nuestro
                equipo está dedicado a brindarte un servicio al cliente
                excepcional. Estamos disponibles para resolver cualquier duda o
                problema que puedas tener, asegurándonos de que tu experiencia
                de compra sea siempre positiva.
              </p>
            </div>
          </div>
        </section>

        <section className="what-we-do">
          <h2>Lo que hacemos</h2>
          <div className="services">
            <div className="service">
              <h3>Amplia Selección de Videojuegos</h3>
              <p>
                En GameMaster, nos enorgullecemos de tener un catálogo diverso
                que incluye los últimos lanzamientos y los clásicos favoritos.
                Nuestro objetivo es satisfacer las necesidades de todos los
                gamers, independientemente de la plataforma que utilicen.
              </p>
              <Link to="/" className="button-grey">
                Aprende más
              </Link>
            </div>
            <div className="service">
              <h3>Experiencia de Compra Personalizada</h3>
              <p>
                Entendemos la importancia de conocer bien un juego antes de
                comprarlo. Por eso, en GameMaster ofrecemos información
                detallada y opiniones honestas de nuestra comunidad, asegurando
                que cada compra sea la correcta.
              </p>
              <Link to="#" className="button-grey">
                Aprende más
              </Link>
            </div>
            <div className="service">
              <h3>Servicio al Cliente de Primera Clase</h3>
              <p>
                ¡En GameMaster, tu satisfacción es nuestra pasión! Nuestro
                equipo siempre está listo para resolver tus dudas, problemas
                técnicos y consultas de pedido. ¡Tu experiencia de compra es
                nuestra principal prioridad!
              </p>
              <Link to="/contacto" className="button-grey">
                Aprende más
              </Link>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="contact-content">
            <h2>Juegos, consolas, accesorios, lo que necesites, lo tenemos.</h2>
            <p>Atendiendo en tu área local</p>
            <Link to="/contacto" className="button-orange">
              Contactanos
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Nosotros;
