import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

// ! CREANDO CONTEXTO
const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
  const url = import.meta.env.VITE_BACKEND_PRODUCTOS;
  const [productos, setProductos] = useState(null);
  const [productoAEditar, setProductoAEditar] = useState(null);

  useEffect(() => {
    getAllProductos();
  }, []);

  const getAllProductos = async () => {
    try {
      const prods = await helperPeticionesHttp(url, {});
      setProductos(prods);
    } catch (error) {
      console.error("[getAllProductos]", error);
    }
  };

  const crearProductoContext = async (nuevoProducto) => {
    try {
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(nuevoProducto),
      };

      const newProducto = await helperPeticionesHttp(url, options);
      setProductos([...productos, newProducto]);
    } catch (error) {
      console.error("[crearProductoContext]", error);
    }
  };

  const actualizarProductoContext = async (productoEditado) => {
    try {
      const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(productoEditado),
      };

      const urlEdicion = url + productoEditado.id;
      const editedProduct = await helperPeticionesHttp(urlEdicion, options);

      const nuevoEstadoProductos = productos.map((producto) =>
        producto.id === editedProduct.id ? editedProduct : producto
      );
      setProductos(nuevoEstadoProductos);
    } catch (error) {
      console.error("[actualizarProductoContext]", error);
    }
  };

  // Nueva función para borrar producto
  const eliminarProductoContext = async (idProducto) => {
    try {
      const urlBorrar = `${url}/${idProducto}`;
      const options = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };

      await helperPeticionesHttp(urlBorrar, options);

      // Actualiza el estado eliminando el producto por su id
      const nuevoEstadoProductos = productos.filter(
        (producto) => producto.id !== idProducto
      );
      setProductos(nuevoEstadoProductos);
    } catch (error) {
      console.error("[eliminarProductoContext]", error);
    }
  };

  const data = {
    productos,
    crearProductoContext,
    actualizarProductoContext,
    eliminarProductoContext, // Agregar la función al contexto
    productoAEditar,
    setProductoAEditar,
  };

  return (
    <ProductosContext.Provider value={data}>
      {children}
    </ProductosContext.Provider>
  );
};

// Exportamos el contexto y provider
export { ProductosProvider };
export default ProductosContext;
