/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";
import { useCart } from "../../context/CartContext";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Si volvieramos a renderizar el componente porque usamos "productos relacionados"
    //Se tendria que volver a renderizar ItemDetailContainer con el nuevo detalle.
    //Entonces: el array de dependencias del useEffect debe llevar el "id" y deberiamos
    //Resetear los estados de loading y error
    //saque el fetch de aca y lo puse en el service para que quede mas prolijo
    setItemDetail(null);
    setLoading(true);
    setError(null);

    //Usamos la funcion del productsService.js
    getProductById(id)
      .then((data) => setItemDetail(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1>Detalles del producto</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} onAddToCart={() => addItem(itemDetail)} />
      </div>
    </section>
  );
};
