import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CategoryList.css';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="container">
      <div className="category-list">
        <h1>Категории рецептов</h1>
        <div className="categories">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <Link to={`/category/${category.slug}`} className="view-recipes-btn">
                Посмотреть рецепты
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList; 