import recipes from "./recipes.js";
import Recipe from "./recipe.js";

const displayRecipe = (recipe) => {
  const recipesHmtl = document.getElementById("recipes");
  const recette = new Recipe(recipe);
  recipesHmtl.innerHTML += recette.recipeCard;
};

const displayRecipes = () => {
  console.log(recipes);
  document.getElementById("recipes").innerHTML = "";
  recipes.forEach((recipe) => {
    displayRecipe(recipe);
  });
};

displayRecipes();

export default displayRecipe;