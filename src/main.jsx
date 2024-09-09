import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ProductosProvider } from "./context/ProductoContext.jsx";
import { CarritoProvider } from "./context/CarritoContext.jsx";

createRoot(document.getElementById("root")).render(
  <ProductosProvider>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </ProductosProvider>
);
