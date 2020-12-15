import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "da2397c9";
  const APP_KEY = "466aebdb504f8a93f3e8d6befedb4565";

  const [recipes, setRecipes] = useState([]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    getRecipies();
  }, []);

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Serach</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe myRecipe={recipe}/>
      ))}
    </div>
  );
}

export default App;
