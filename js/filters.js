const filterRecipesWithPrincipaleSearchBar = (recipes) => {
  const searchUserPrincipalSearchBar = document.getElementById("searchInput");
  searchUserPrincipalSearchBar.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      document.getElementById("recipes").innerHTML = "";
      const recipesFiltredWithPrincipalSearchBar = [];
      recipes.filter((recipe) => {
        filterRecipesPrincipalSearchBar(
          element,
          recipe,
          recipesFiltredWithPrincipalSearchBar
        );
      });
      error(e);
    } else if (!element.length) {
      main(recipes);
    }
  });
};

const filterRecipesPrincipalSearchBar = (
  element,
  recipe,
  recipesFiltredWithPrincipalSearchBar
) => {
  if (
    recipe.name.toLowerCase().includes(element) ||
    recipe.description.toLowerCase().includes(element) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.ingredient.toLowerCase().includes(element)
    )
  ) {
    recipesFiltredWithPrincipalSearchBar.push(recipe);
  }
  displayRecipes(recipesFiltredWithPrincipalSearchBar);
};

const filterRecipesWithTag = (recipes) => {
  const tags = document.querySelectorAll(".tags.tag.txt");
  console.log(tags.length);
  const recipesFiltredWithTags = [];
  tags.forEach((tag) => {
    recipes.forEach((recipe) => {
      if (
        recipe.name.toLowerCase().includes(tag.textContent) ||
        recipe.description.toLowerCase().includes(tag.textContent) ||
        recipe.appliance.toLowerCase().includes(tag.textContent) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(tag.textContent)
        ) ||
        recipe.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(tag.textContent)
        )
      ) {
        recipesFiltredWithTags.push(recipe);
      }
      displayRecipes(recipesFiltredWithTags);
    });
  });
};
