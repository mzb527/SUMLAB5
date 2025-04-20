import React from 'react';
import './ProductCard.css'; // Optional: Add styles for the product card

const ProductCard = ({ product, onEdit }) => {
  const { name, price, description, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p><strong>Price:</strong> ${price}</p>
        <button onClick={() => onEdit(product)}>Edit</button>
      </div>
    </div>
  );
};

export default ProductCard;