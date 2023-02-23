const displayRecipe = (recipe) => {
  const recipesHmtl = document.getElementById('recipes');
  const recette = new Recipe(recipe);
  recipesHmtl.innerHTML += recette.recipeCard;
};

const displayRecipes = () => {
  document.getElementById('recipes').innerHTML = '';
  document.querySelector('.messBlock').innerHTML = '';
  document.querySelector('.tags').innerHTML = '';
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

const displayIngredients = (filteredRecipes) => {
  const ingrs = document.querySelector('.ingredients');
  ingrs.innerHTML = '';
  const tingr = [];
  filteredRecipes.forEach((tabbb) => {
    tabbb.ingredients.forEach((ingr) => {
      tingr.push(ingr.ingredient.toLowerCase());
    });
  });
  const uTab = [...new Set(tingr)];
  uTab.forEach((ingr) => {
    ingrs.innerHTML += `
          <li class=" ingrsC" title="Filter les recettes avec le tag : ${ingr}">${ingr}</li>
        `;
  });
}

const displayAppareils = (filteredRecipes) => {
  const apps = document.querySelector('.appareil');
  apps.innerHTML = '';
  const tapp = [];
  filteredRecipes.forEach((app) => {
    tapp.push(app.appliance.toLowerCase());
  });
  const appTab = [...new Set(tapp)];
  appTab.forEach((el) => {
    const app = JSON.stringify(el);
    const appp = app.replaceAll('"', '');
    apps.innerHTML += `
          <li class="appsC" title="Filter les recettes avec le tag : ${appp}">${appp}</li>
        `;
  });
};

const displayUstensils = (filteredRecipes) => {
  const usts = document.querySelector('.ustensiles');
  usts.innerHTML = '';
  const tUst = [];
  filteredRecipes.forEach((ust) => {
    ust.ustensils.forEach((ustt) => {
      tUst.push(ustt.toLowerCase());
    });
  });
  const ustab = [...new Set(tUst)];
  ustab.forEach((el) => {
    const ust = JSON.stringify(el);
    const ustt = ust.replaceAll('"', '');
    usts.innerHTML += `
          <li class="ustsC" title="Filter les recettes avec le tag : ${ustt}">${ustt}</li>
      `;
  });
};

