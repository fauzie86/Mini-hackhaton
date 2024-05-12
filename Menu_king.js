import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StyleMenu_king.css';

function MenuKing() {
  const [coffeeTypes, setCoffeeTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coffeePerPage] = useState(8);

  useEffect(() => {
    const apiUrl = 'https://fake-coffee-api.vercel.app/api';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setCoffeeTypes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const indexOfLastCoffee = currentPage * coffeePerPage;
  const indexOfFirstCoffee = indexOfLastCoffee - coffeePerPage;
  const currentCoffeeTypes = coffeeTypes.slice(indexOfFirstCoffee, indexOfLastCoffee);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Our Coffee Beam Product</h2>
      <div className="row">
        {currentCoffeeTypes.map(coffeeType => (
          <div key={coffeeType._id} className="col-md-4 mb-4">
            <Link to={`/product/${coffeeType.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {/* Use Link to navigate to the product details page */}
              <div className="card">
                <img src={coffeeType.image_url} className="card-img-top" alt={coffeeType.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{coffeeType.name}</h5>
                  <p className="card-text">Description: {coffeeType.description}</p>
                  <p className="card-text">Price: ${coffeeType.price}</p>
                  <p className="card-text">Region: {coffeeType.region}</p>
                  <p className="card-text">Weight: {coffeeType.weight} g</p>
                  <p className="card-text">Flavor Profile: {coffeeType.flavor_profile.join(', ')}</p>
                  <p className="card-text">Grind Options: {coffeeType.grind_option.join(', ')}</p>
                  <p className="card-text">Roast Level: {coffeeType.roast_level}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(coffeeTypes.length / coffeePerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MenuKing;
