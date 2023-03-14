const displayUstensils = (filteredRecipes) => {
  const usts = document.querySelector(".ustensiles");
  usts.innerHTML = "";
  const tUst = [];
  filteredRecipes.forEach((ust) => {
    ust.ustensils.forEach((ustt) => {
      tUst.push(ustt.toLowerCase());
    });
  });
  const ustab = [...new Set(tUst)];
  ustab.forEach((el) => {
    const ust = JSON.stringify(el);
    const ustt = ust.replaceAll('"', "");
    usts.innerHTML += `
          <li class="ustsC" title="Filter les recettes avec le tag : ${ustt}">${ustt}</li>
      `;
  });
};

const filterUstensilsInSearchBar = (filteredRecipes) => {
  const usts = document.querySelector(".ustensiles");
  const searchUserUstensils = document.getElementById("searchUstensiles");
  searchUserUstensils.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const t1Ust = [];
      const t1UstRecipe = [];
      usts.innerHTML = "";
      filteredRecipes.filter((recipe) => {
        recipe.ustensils.forEach((el) => {
          if (el.toLowerCase().includes(element)) {
            t1Ust.push(el.toLowerCase());
            t1UstRecipe.push(recipe);
          }
        });
      });
      const ut1UstRecipe = [...new Set(t1UstRecipe)];
      usts.innerHTML = "";
      const uTab = [...new Set(t1Ust)];
      uTab.forEach((el) => {
        usts.innerHTML += `
            <li class="ustsC"  title="Filter les recettes avec le tag : ${el}">${el}</li>
          `;
      });
      filterRecipesWithTagUstensil(ut1UstRecipe);
    } else if (!element.length) {
      displayTags(filteredRecipes);
    }
  });
};

const filterRecipesWithTagUstensil = (filteredRecipes) => {
  const ustsC = document.querySelectorAll(".ustsC");
  ustsC.forEach((ustC) => {
    const ustCid = ustC.textContent.toLowerCase().replaceAll(" ", "");
    const btnIdUst = [...ustCid].reverse().join("");
    ustC.addEventListener("click", (e) => {
      document.getElementById("tags").innerHTML += `
            <button
              type="button"
              class="tags  tag--ust btn d-flex align-items-center "
              id=${btnIdUst}
            >
              <p class="tags tag txt">${ustC.textContent}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle sX"
                id=${ustCid}
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>`;
      filterRecipesWithTag(ustC.textContent, filteredRecipes);
      filterRecipesWhenCloseTagUstensil(filteredRecipes);
    });
  });
};

const filterRecipesWhenCloseTagUstensil = (filteredRecipes) => {
  const ustsX = document.querySelectorAll(".sX");
  const element = document.getElementById("searchInput").value;
  ustsX.forEach((ustX) => {
    const btnX = [...ustX.id].reverse().join("");
    ustX.addEventListener("click", () => {
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
