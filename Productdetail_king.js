import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Productdetail_king.css'; // Import your CSS file

function ProductDetailKing() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://fake-coffee-api.vercel.app/api/${productId}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const productData = Array.isArray(data) ? data[0] : data;
        setProduct(productData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [productId]);

  return (
    <div className="product-details-container">
      <h2>Product Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-details">
          <p>Product ID: {productId}</p>
          {product ? (
            <>
              <p className="product-name">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-region">Region: {product.region}</p>
              <p className="product-weight">Weight: {product.weight} g</p>
              {product.flavor_profile && product.flavor_profile.length > 0 && (
                <p className="product-flavor-profile">Flavor Profile: {product.flavor_profile.join(', ')}</p>
              )}
              {product.grind_option && product.grind_option.length > 0 && (
                <p className="product-grind-options">Grind Options: {product.grind_option.join(', ')}</p>
              )}
              <p className="product-roast-level">Roast Level: {product.roast_level}</p>
              <img className="product-image" src={product.image_url} alt={product.name} />
            </>
          ) : (
            <p>Product not found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductDetailKing;
