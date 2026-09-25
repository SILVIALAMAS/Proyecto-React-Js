/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = ({ onAddToCart }) => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItemDetail(null);
    setLoading(true);
    setError(null);

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((prod) => String(prod.id) === id);
        if (item) {
          setItemDetail(item);
        } else {
          throw new Error("Elemento no encontrado");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="cargando">Cargando...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!itemDetail)
    return <p className="no-encontrado">Producto no encontrado</p>;

  return <ItemDetail item={itemDetail} onAddToCart={onAddToCart} />;
};
