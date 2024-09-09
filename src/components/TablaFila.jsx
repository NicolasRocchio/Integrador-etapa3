import { useContext } from "react";
import "./TablaFila.scss";
import ProductosContext from "../context/ProductoContext";

const TablaFila = ({ producto }) => {
  const { setProductoAEditar, eliminarProductoContext } =
    useContext(ProductosContext);

  const handleEditar = (producto) => {
    console.log("Producto a editar...", producto.id);
    setProductoAEditar(producto);
  };

  const handleBorrar = (idProducto) => {
    eliminarProductoContext(idProducto);
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? "SI" : "NO"}</td>
      <td>
        <button onClick={() => handleEditar(producto)} className="button-grey">
          Editar
        </button>
        <button
          onClick={() => handleBorrar(producto.id)}
          className="button-grey"
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
