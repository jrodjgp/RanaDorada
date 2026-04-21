import { useState, useRef, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CervezasPage from './pages/CervezasPage';
import BeerDetailPage from './pages/BeerDetailPage';
import CerveceriaPage from './pages/CerveceriaPage';
import NosotrosPage from './pages/NosotrosPage';
import LocalesPage from './pages/LocalesPage';
import CartDrawer from './components/CartDrawer';
import { Beer } from './data/beers';

export default function App() {
  const [cartItems, setCartItems] = useState<Beer[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const badgeRef = useRef<HTMLSpanElement | null>(null);

  const cartCount = cartItems.length;

  const onAddToCart = useCallback((beer: Beer) => {
    setCartItems((prev) => [...prev, beer]);

    const badge = badgeRef.current;
    if (badge) {
      badge.classList.remove('cart-bounce');
      void badge.offsetWidth;
      badge.classList.add('cart-bounce');
      setTimeout(() => badge.classList.remove('cart-bounce'), 300);
    }
  }, []);

  const openCart = useCallback(() => {
    setCartDrawerOpen(true);
  }, []);

  const onRemove = useCallback((id: number) => {
    setCartItems((prev) => {
      const idx = prev.findLastIndex((b) => b.id === id);
      if (idx === -1) return prev;
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cartCount={cartCount}
              onAddToCart={onAddToCart}
              badgeRef={badgeRef}
            />
          }
        />
        <Route
          path="/cervezas"
          element={
            <CervezasPage
              cartCount={cartCount}
              onAddToCart={onAddToCart}
              openCart={openCart}
              badgeRef={badgeRef}
            />
          }
        />
        <Route
          path="/cervezas/:beerId"
          element={
            <BeerDetailPage
              cartCount={cartCount}
              onAddToCart={onAddToCart}
              openCart={openCart}
              badgeRef={badgeRef}
            />
          }
        />
        <Route
          path="/cerveceria"
          element={
            <CerveceriaPage
              cartCount={cartCount}
              badgeRef={badgeRef}
            />
          }
        />
        <Route
          path="/nosotros"
          element={
            <NosotrosPage
              cartCount={cartCount}
              badgeRef={badgeRef}
            />
          }
        />
        <Route
          path="/locales"
          element={
            <LocalesPage
              cartCount={cartCount}
              badgeRef={badgeRef}
            />
          }
        />
      </Routes>

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onRemove={onRemove}
      />
    </BrowserRouter>
  );
}
