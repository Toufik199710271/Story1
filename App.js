import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <header>
        <h1>متجر إلكتروني</h1>
        <nav>
          <Link to="/">الرئيسية</Link>
          <Link to="/products">المنتجات</Link>
          <Link to="/cart">سلة المشتريات</Link>
          <Link to="/login">تسجيل الدخول</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
