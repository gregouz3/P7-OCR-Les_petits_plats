const filterRecipesWithPrincipaleSearchBar = (recipes) => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      document.getElementById("recipes").innerHTML = "";
      const recipesFiltred = [];
      recipes.filter((recipe) => {
        if (
          recipe.name.toLowerCase().includes(element) ||
          recipe.description.toLowerCase().includes(element) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(element)
          )
        ) {
          recipesFiltred.push(recipe);
        }
        displayRecipes(recipesFiltred);
      });
      error(e);
    } else if (!element.length) {
      main(recipes);
    }
  });
};
