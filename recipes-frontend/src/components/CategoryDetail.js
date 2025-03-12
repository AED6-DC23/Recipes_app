import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './CategoryDetail.css';

function CategoryDetail() {
  const [category, setCategory] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/categories/${slug}/`)
      .then(response => {
        setCategory(response.data);
      })
      .catch(error => console.error('Error fetching category:', error));
  }, [slug]);

  if (!category) return <div className="container">Загрузка...</div>;

  return (
    <div className="container">
      <div className="category-detail">
        <div className="category-header">
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
        <div className="recipes-grid">
          {category.recipes.map(recipe => (
            <div key={recipe.slug} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p className="cooking-time">
                Время приготовления: {recipe.cooking_time} минут(а)
              </p>
              <Link to={`/recipe/${recipe.slug}`} className="view-recipe-btn">
                Посмотреть рецепт
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryDetail; 