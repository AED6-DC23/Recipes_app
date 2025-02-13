import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CategoryList from './components/CategoryList';
import CategoryDetail from './components/CategoryDetail';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/category/:slug" element={<CategoryDetail />} />
          <Route path="/recipe/:slug" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 