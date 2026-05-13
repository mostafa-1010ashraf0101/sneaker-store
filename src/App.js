import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;