/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [detail, setDetail] = useState({ id: null, item: null, error: null });
  const loading = detail.id !== id;

  useEffect(() => {
    let isActive = true;

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((prod) => String(prod.id) === id);
        if (item) {
          if (isActive) setDetail({ id, item, error: null });
        } else {
          throw new Error("Elemento no encontrado");
        }
      })
      .catch((error) => {
        if (isActive) setDetail({ id, item: null, error: error.message });
      });

    return () => {
      isActive = false;
    };
  }, [id]);

  if (loading) return <p className="cargando">Cargando...</p>;
  if (detail.error) return <p className="error">{detail.error}</p>;
  if (!detail.item)
    return <p className="no-encontrado">Producto no encontrado</p>;

  return (
    <ItemDetail item={detail.item} onAddToCart={() => addItem(detail.item)} />
  );
};
