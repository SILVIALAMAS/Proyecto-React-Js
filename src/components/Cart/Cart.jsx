/** @format */

import "./Cart.css";

export const Cart = ({ cartCount = 0 }) => {
  return (
    <section className="cart-container">
      <div className="cart-card">
        <h1>Carrito</h1>
        <p>
          {cartCount > 0
            ? `Tenés ${cartCount} producto${cartCount > 1 ? "s" : ""} en el carrito.`
            : "Tu carrito está vacío por ahora."}
        </p>
        <button className="button-primary">Seguir comprando</button>
      </div>
    </section>
  );
};
