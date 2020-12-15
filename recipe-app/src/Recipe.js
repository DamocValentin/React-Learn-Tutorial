import React from 'react';


const Recipe = ({myRecipe}) => {
    return(
        <div>
            <h1>{myRecipe.recipe.label}</h1>
            <p>{myRecipe.recipe.calories}</p>
            <img src={myRecipe.recipe.image} alt="" />
        </div>
    );
}

export default Recipe;