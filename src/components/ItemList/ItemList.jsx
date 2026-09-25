/** @format */

import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (!products.length) return <p>No hay productos</p>;

  return (
    <div className="item-list">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <Item product={product} />
        </Link>
      ))}
    </div>
  );
};
