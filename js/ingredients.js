const displayIngredients = (recipes) => {
  const ingrs = document.querySelector(".ingredients");
  ingrs.innerHTML = "";
  const tingr = [];
  recipes.forEach((tabbb) => {
    tabbb.ingredients.forEach((ingr) => {
      tingr.push(ingr.ingredient.toLowerCase());
    });
  });
  const uTab = [...new Set(tingr)];
  uTab.forEach((ingr) => {
    ingrs.innerHTML += `
          <li class="ingrsC" title="Filter les recettes avec le tag : ${ingr}">${ingr}</li>
        `;
  });
  filterIngredientsInSearchBar(recipes);
};

const filterIngredientsInSearchBar = (recipes) => {
  const ingrs = document.querySelector(".ingredients");
  const searchUserIngredient = document.getElementById("searchIngredient");
  searchUserIngredient.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const t1ingr = [];
      const t1ingRecipe = [];
      ingrs.innerHTML = "";
      recipes.filter((recipe) => {
        recipe.ingredients.forEach((el) => {
          if (el.ingredient.toLowerCase().includes(element)) {
            t1ingr.push(el.ingredient.toLowerCase());
            t1ingRecipe.push(recipe);
          }
        });
      });
      const ut1ingRecipe = [...new Set(t1ingRecipe)];
      ingrs.innerHTML = "";
      const uTab = [...new Set(t1ingr)];
      uTab.forEach((el) => {
        ingrs.innerHTML += `
            <li class="ingrsC" title="Filter les recettes avec le tag : ${el}">${el}</li>
          `;
      });
    } else if (!element.length) {
      displayIngredients(recipes);
    }
  });
};
