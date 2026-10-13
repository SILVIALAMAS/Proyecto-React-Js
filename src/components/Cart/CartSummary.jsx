/** @format */

import { useCart } from "../../context/useCart";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();

  const total = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
  }).format(getCartTotal());

  return (
    <>
      <p>TOTAL A PAGAR:👉 {total}</p>
      <button className="btn bg-success primary" onClick={checkout}>
        FINALIZAR COMPRA
      </button>
    </>
  );
};
