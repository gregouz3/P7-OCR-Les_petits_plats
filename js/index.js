import recipes from "./recipes.js";
import Recipe from "./recipe.js";

const displayRecipe = (recipe) => {
  //console.log(recipes);
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
  displayTags();
};



const displayIngredients = () => {
  const ingrs = document.querySelector(".ingredients");
  ingrs.innerHTML = "";
  const ingredients = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingr) => {
      ingredients.push(ingr.ingredient.toLowerCase());
    });
  });
  const uniqueIngredients = [...new Set(ingredients)];
  uniqueIngredients.forEach((ingr) => {
    ingrs.innerHTML += `
        <li class="ingrsC">${ingr}</li>
      `;
  });
};

const displayAppliances = () => {
  const apps = document.querySelector(".appareil");
  apps.innerHTML = "";
  const appliances = [];
  recipes.forEach((recipe) => {
    appliances.push(recipe.appliance.toLowerCase());
  });
  const uniqueAppliances = [...new Set(appliances)];
  uniqueAppliances.forEach((el) => {
    const app = JSON.stringify(el);
    apps.innerHTML += `
        <li class="appsC">${app}</li>
      `;
  });
};

const displayUstensils = () => {
  const usts = document.querySelector(".ustensiles");
  usts.innerHTML = "";
  const ustensils = [];
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustt) => {
      ustensils.push(ustt.toLowerCase());
    });
  });
  const uniqueUstensils = [...new Set(ustensils)];
  uniqueUstensils.forEach((el) => {
    const ust = JSON.stringify(el);
    usts.innerHTML += `
        <li class="ustsC">${ust}</li>
    `;
  });
};

const displayTags = () => {
  displayIngredients();
  displayAppliances();
  displayUstensils();
};


displayRecipes();

export default displayRecipe
