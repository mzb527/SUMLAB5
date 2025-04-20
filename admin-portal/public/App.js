import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navigation Bar
import LandingPage from './pages/LandingPage'; // Welcome/Landing Page
import AddProductPage from './pages/AddProductPage'; // Page for Adding Products
import ProductsPage from './pages/ProductsPage'; // Page for Managing Products
import { ProductProvider } from './context/ProductContext'; // Context Provider for Products

const App = () => {
  return (
    // Wrap the application in ProductProvider for global state management
    <ProductProvider>
      <Router>
        {/* Navbar is persistent across all pages */}
        <Navbar />
        <Routes>
          {/* Route to the Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Route to Add Product Page */}
          <Route path="/add-product" element={<AddProductPage />} />
          
          {/* Route to Products Page */}
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;