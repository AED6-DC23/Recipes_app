import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetail.css';

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/recipes/${slug}/`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => console.error('Error fetching recipe:', error));
  }, [slug]);

  if (!recipe) return <div className="container">Загрузка...</div>;

  return (
    <div className="container">
      <div className="recipe-detail">
        <div className="recipe-header">
          <h1>{recipe.title}</h1>
        </div>
        
        {recipe.image_url && (
          <img 
            src={recipe.image_url} 
            alt={recipe.title} 
            className="recipe-image"
          />
        )}
        
        <div className="recipe-info">
          <div className="cooking-time-badge">
            Время приготовления: {recipe.cooking_time} минут(а)
          </div>
          
          <h2>Ингридиенты</h2>
          <div className="ingredients-list">
            <pre>{recipe.ingredients}</pre>
          </div>
          
          <h2>Инструкция</h2>
          <div className="instructions">
            <pre>{recipe.instructions}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail; 