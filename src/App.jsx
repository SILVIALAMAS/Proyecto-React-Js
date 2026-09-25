/** @format */

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart cartCount={cartCount} />} />
          <Route
            path="/product/:id"
            element={
              <ItemDetailContainer
                onAddToCart={() => setCartCount((count) => count + 1)}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
