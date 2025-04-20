import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const ProductsPage = () => {
  const { products, editProduct } = useProducts();
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Product List</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={editProduct}
        />
      ))}
    </div>
  );
};

export default ProductsPage;