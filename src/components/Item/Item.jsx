/** @format */

import { Link } from "react-router-dom";
import "./Item.css";
export const Item = ({ product, children }) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
  }).format(product.price);

  return (
    <article className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="codigo">{product.code}</p>
      <p className="item-price">{price}</p>
      <p>{product.shortDescription}</p>
      <p>{product.application}</p>
      <Link to={`/product/${product.id}`} className="item-boton">
        Ver detalle
      </Link>
      {children}
    </article>
  );
};
