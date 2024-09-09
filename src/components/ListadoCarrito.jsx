import "./Listadocarrito.scss";
import React, { useContext } from "react";
import ItemCarrito from "./ItemCarrito";
import CarritoContext from "../context/CarritoContext";

const ListadoCarrito = () => {
  const { carrito, limpiarCarritoContext, guardarCarritoContext } =
    useContext(CarritoContext);

  const handleComprar = () => {
    console.log("Comprando...");
    guardarCarritoContext();
  };

  const handleLimpiarCarrito = () => {
    console.log("Vaciando carrito...");
    limpiarCarritoContext();
  };

  return (
    <>
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.length <= 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No hay productos en el carrito
              </td>
            </tr>
          ) : (
            carrito.map((producto, idx) => (
              <ItemCarrito key={idx} producto={producto} />
            ))
          )}
        </tbody>
      </table>
      <hr />
      {!carrito.length <= 0 && (
        <>
          <button onClick={handleLimpiarCarrito} className="button-grey">
            Vaciar Carrito
          </button>
          <button onClick={handleComprar} className="button-grey">
            Comprar
          </button>
        </>
      )}
    </>
  );
};

export default ListadoCarrito;
