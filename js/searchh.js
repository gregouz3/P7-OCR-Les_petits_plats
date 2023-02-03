import recipes from "./recipes.js";
import displayRecipe from "./index.js";

const search = () => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const tab = [];
      document.getElementById("recipes").innerHTML = "";
      recipes.filter((recipe) => filterRecipes(element, recipe, tab));
      displayResults(tab);
    }
    showErrorMessage(e);
  });
  displayResults(recipes);
}

const filterRecipes = (element, recipe, tab) => {
  if (
    recipe.name.toLowerCase().includes(element) ||
    recipe.description.toLowerCase().includes(element) ||
    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(element))
  ) {
    displayRecipe(recipe);
    tab.push(recipe);
  }
};

const displayResults = (tab) => {
  displayIngredients(tab);
  displayAppliances(tab);
  displayUstensils(tab);
  displayTags(tab);
};

const displayTags = (tab) => {
  displayIngredientTags(tab);
  displayApplianceTags(tab);
  displayUstensilTags(tab);
};

const showErrorMessage = (e) => {
  if (document.getElementById("recipes").innerHTML === "") {
    alert("No recipe matches your criteria, try searching for 'apple pie', 'fish', etc.");
    document.getElementById("recipes").innerHTML = "";
    document.getElementById("searchAppareil").value = "";
    document.getElementById("searchUstensiles").value = "";
    document.querySelector(".appareil").innerHTML = "";
    document.querySelector(".ingredients").innerHTML = "";
    document.querySelector(".ustensiles").innerHTML = "";
    e.target.value = "";
    recipes.forEach((recipe) => {
      displayRecipe(recipe);
    });
    displayResults(recipes);
  }
};
