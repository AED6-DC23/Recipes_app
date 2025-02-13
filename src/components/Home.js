import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Добро пожаловать в Recipe Book</h1>
          <p>Откройте для себя вкусные рецепты из разных кухонь мира</p>
          <Link to="/categories" className="cta-button">
          Просмотр категорий
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">🥘</div>
          <h2>Различные категории</h2>
          <p>Просматривайте рецепты, упорядоченные по категориям для удобства навигации</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📝</div>
          <h2>Подробные инструкции</h2>
          <p>Следуйте пошаговым инструкциям по приготовлению с подробным списком ингредиентов</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⏱️</div>
          <h2>Время готовки!</h2>
          <p>Точно знайте, сколько времени занимает приготовление каждого рецепта</p>
        </div>
      </div>

      <div className="about-section">
        <h2>About Recipe Book</h2>
        <p>
          Recipe Book -  это то, что поможет вам открыть для себя удивительные рецепты. 
 Независимо от того, являетесь ли вы начинающим кулинаром или опытным шеф-поваром, вы найдете
рецепты, соответствующие вашему уровню мастерства и вкусовым предпочтениям.
        </p>
        <Link to="/categories" className="secondary-button">
          Действуйте:)
        </Link>
      </div>
    </div>
  );
}

export default Home;