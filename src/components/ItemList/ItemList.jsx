/** @format */

import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (!products.length) return <p>No hay productos</p>;

  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};
