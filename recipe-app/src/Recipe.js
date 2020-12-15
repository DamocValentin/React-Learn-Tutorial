import React from 'react';
import style from './recipe.module.css'


const Recipe = ({myRecipe}) => {
    return(
        <div className={style.recipe}>
            <h1>{myRecipe.label}</h1>
            <ol>
                {myRecipe.ingredients.map(
                    ingredient =>(
                        <li>
                            {ingredient.text}
                        </li>
                    )
                )}
            </ol>
            <img className={style.image} src={myRecipe.image} alt="" />
        </div>
    );
}

export default Recipe;