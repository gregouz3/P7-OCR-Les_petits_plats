const displayRecipe = (recipe) => {
  const recipesHmtl = document.getElementById("recipes");
  const recette = new Recipe(recipe);
  recipesHmtl.innerHTML += recette.recipeCard;
};

const displayRecipes = (recipes) => {
  document.getElementById("recipes").innerHTML = "";
  document.querySelector(".messBlock").innerHTML = "";
  recipes.forEach(displayRecipe);
  displayIngredients(recipes);
  displayAppareils(recipes);
  displayUstensils(recipes);
  selectRecipe();
};
