import { useContext } from "react";
import "./Inicio.scss";
import useTitulo from "../hooks/useTitulo";
import Card from "../components/Card";
import ProductoContext from "../context/ProductoContext";

const Inicio = () => {
  const { productos } = useContext(ProductoContext);

  useTitulo("Inicio");

  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>
            Se encontraron{" "}
            {productos && productos.length > 0 ? productos.length : 0} juegos
            disponibles
          </h1>
        </header>

        <div className="cards-container" id="contenedor-cards">
          {productos &&
            productos.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Inicio;
