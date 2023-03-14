const displayIngredients = (filteredRecipes) => {
  const ingrs = document.querySelector(".ingredients");
  ingrs.innerHTML = "";
  const tingr = [];
  filteredRecipes.forEach((tabbb) => {
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
};

const filterIngredientsInSearchBar = (filteredRecipes) => {
  const ingrs = document.querySelector(".ingredients");
  const searchUserIngredient = document.getElementById("searchIngredient");
  searchUserIngredient.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const t1ingr = [];
      const t1ingRecipe = [];
      ingrs.innerHTML = "";
      filteredRecipes.filter((recipe) => {
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
      filterRecipesWithTagIngredient(ut1ingRecipe);
    } else if (!element.length) {
      displayTags(filteredRecipes);
    }
  });
};

const filterRecipesWithTagIngredient = (filteredRecipes) => {
  const ingrsC = document.querySelectorAll(".ingrsC");
  ingrsC.forEach((ingrC) => {
    const ingrCid = ingrC.textContent.toLowerCase().replaceAll(" ", "");
    const btnIdIngr = [...ingrCid].reverse().join("");
    ingrC.addEventListener("click", (e) => {
      document.getElementById("tags").innerHTML += `
              <button
                type="button"
                class="tags tag--ingr btn d-flex align-items-center"
                id=${btnIdIngr}
              >
                <p class="tags tag txt">${ingrC.textContent}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-circle sX"
                  id=${ingrCid}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>`;
      filterRecipesWithTag(ingrC.textContent, filteredRecipes);
      filterRecipesWhenCloseTagIngredient(filteredRecipes);
    });
  });
};

const filterRecipesWhenCloseTagIngredient = (filteredRecipes) => {
  const ingrsX = document.querySelectorAll(".sX");
  const element = document.getElementById("searchInput").value;
  ingrsX.forEach((ingrX) => {
    const btnX = [...ingrX.id].reverse().join("");
    ingrX.addEventListener("click", () => {
      document.getElementById(btnX).remove();
      document.querySelector("#recipes").style.top = "19.5rem";

      const tags = document.querySelectorAll(".tags.tag.txt");
      if (tags.length === 0) {
        if (element !== "") {
          document.getElementById("recipes").innerHTML = "";
          const secondfilteredRecipes = [];
          recipes.filter((recipe) =>
            filterRecipes(element, recipe, secondfilteredRecipes)
          );
          selectRecipe();
        } else {
          displayRecipes();
          displayResults(recipes);
        }
      } else if (tags.length === 1) {
        if (element !== "") {
          filterRecipesWithTag(tags[0].textContent, filteredRecipes);
        } else {
          filterRecipesWithTag(tags[0].textContent, recipes);
        }
      } else if (element !== "") {
        tags.forEach((tag) => {
          filterRecipesWithTag(tag.textContent, filteredRecipes);
        });
      } else {
        tags.forEach((tag) => {
          filterRecipesWithTag(tag.textContent, recipes);
        });
      }
    });
  });
};
