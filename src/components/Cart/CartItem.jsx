/** @format */

import { useCart } from "../../context/useCart";
import { Item } from "../Item/Item";

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <Item product={item}>
      <button
        className="btn bg-delete primary"
        onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </Item>
  );
};
