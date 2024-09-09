import { useEffect } from "react";

const useTitulo = (textoTitulo = "Sin título") => {
  useEffect(() => {
    document.title = `Educación IT - ${textoTitulo}`;
  }, []);
};

export default useTitulo;
