const displayRecipe = (recipe) => {
  const recipesHmtl = document.getElementById("recipes");
  const recette = new Recipe(recipe);
  recipesHmtl.innerHTML += recette.recipeCard;
};

const displayRecipes = () => {
  document.getElementById("recipes").innerHTML = "";
  document.querySelector(".tags").innerHTML = "";
  recipes.forEach(displayRecipe);
};

const displayResults = (filteredRecipes) => {
  filterIngredientsInSearchBar(filteredRecipes);
  filterAppareilsInSearchBar(filteredRecipes);
  filterUstensilsInSearchBar(filteredRecipes);
  displayTags(filteredRecipes);
};

const displayTags = (filteredRecipes) => {
  displayIngredients(filteredRecipes);
  displayAppareils(filteredRecipes);
  displayUstensils(filteredRecipes);
  filterRecipesWithTags(filteredRecipes);
};
