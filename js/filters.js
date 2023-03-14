const filterRecipesWithPrincipaleSearchBar = (filteredRecipes) => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      document.getElementById("recipes").innerHTML = "";
      document.querySelector(".messBlock").innerHTML = "";
      const secondfilteredRecipes = [];
      filteredRecipes.filter((recipe) =>
        filterRecipes(element, recipe, secondfilteredRecipes)
      );
      displayResults(secondfilteredRecipes);
      error(e);
    } else if (!element.length) {
      displayRecipes();
      filterRecipesWithPrincipaleSearchBar(recipes);
      displayResults(recipes);
    }
  });
};

const filterRecipes = (element, recipe, filteredRecipes) => {
  if (
    recipe.name.toLowerCase().includes(element) ||
    recipe.description.toLowerCase().includes(element) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(element)
    )
  ) {
    displayRecipe(recipe);
    filteredRecipes.push(recipe);
  }
};

const filterRecipesWithTags = (filteredRecipes) => {
  filterRecipesWithTagIngredient(filteredRecipes);
  filterRecipesWithTagUstensil(filteredRecipes);
  filterRecipesWithTagAppareil(filteredRecipes);
  filterRecipesWithPrincipaleSearchBar(filteredRecipes);
  selectRecipe();
};

const filterRecipesWithTag = (tag, filteredRecipes) => {
  const filteredTagRecipes = [];
  document.getElementById("recipes").innerHTML = "";
  document.getElementById("recipes").style.top = "22.5rem";

  filteredRecipes.forEach((recipe) => {
    if (
      recipe.name.toLowerCase().includes(tag) ||
      recipe.description.toLowerCase().includes(tag) ||
      recipe.appliance.toLowerCase().includes(tag) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(tag)
      ) ||
      recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(tag))
    ) {
      displayRecipe(recipe);
      filteredTagRecipes.push(recipe);
    }
    displayResults(filteredTagRecipes);
  });
};
