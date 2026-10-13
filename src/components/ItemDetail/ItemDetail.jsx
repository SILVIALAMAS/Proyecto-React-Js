/** @format */

import "./ItemDetail.css";

export const ItemDetail = ({ item, onAddToCart }) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "code",
  }).format(item.price);

  return (
    <section className="item-detail">
      <div className="item-detail__card">
        <img className="item-detail__image" src={item.image} alt={item.name} />

        <div className="item-detail__info">
          <span className="item-detail__category">Equipo industrial</span>
          <h1 className="item-detail__title">{item.name}</h1>
          <p className="item-detail__price">{price}</p>
          <p>Código: {item.code}</p>
          <p className="item-detail__description">{item.shortDescription}</p>

          <div className="item-detail__actions">
            <button
              className="item-detail__button item-detail__button--primary"
              onClick={onAddToCart}>
              Agregar al carrito
            </button>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <h3>Detalle técnico</h3>
            <p>{item["detalle tecnico"]}</p>
            <h3>Aplicación</h3>
            <p>{item.application}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
