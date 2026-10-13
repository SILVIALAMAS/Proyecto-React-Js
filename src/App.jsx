/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { useCart } from "./context/CartContext";

function App() {
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
