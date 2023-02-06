import recipes from "./recipes.js";
import Recipe from "./recipe.js";

const main = () => {
  displayRecipes();
  principaleSearch(recipes);

  displayResults(recipes);
}

const displayRecipe = (recipe) => {
  const recipesHmtl = document.getElementById("recipes");
  const recette = new Recipe(recipe);
  recipesHmtl.innerHTML += recette.recipeCard;
};

const displayRecipes = () => {
  document.getElementById("recipes").innerHTML = "";
  recipes.forEach(displayRecipe);
};

const filterRecipes = (element, recipe, filteredRecipes) => {
  if (
    recipe.name.toLowerCase().includes(element) ||
    recipe.description.toLowerCase().includes(element) ||
    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(element))
  ) {
    displayRecipe(recipe);
    filteredRecipes.push(recipe);
  }
};

const filterTag = (tag, filteredRecipes) => {
  const filteredTagRecipes = [];
  document.getElementById("recipes").innerHTML = "";
  filteredRecipes.forEach((recipe => {
    if (
      recipe.name.toLowerCase().includes(tag) ||
      recipe.description.toLowerCase().includes(tag) ||
      recipe.appliance.toLowerCase().includes(tag) ||
      recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(tag)) ||
      recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(tag))
    ) {
      displayRecipe(recipe);
      filteredTagRecipes.push(recipe);
    }
    displayResults(filteredTagRecipes);
  }))
};

const displayResults = (filteredRecipes) => {
  ingredientsFilter(filteredRecipes);
  appareilsFilter(filteredRecipes);
  ustensilsFilter(filteredRecipes);
  displayTag(filteredRecipes);
};

 const displayTag = (filteredRecipes) => {
  ingredients(filteredRecipes);
  appareils(filteredRecipes);
  ustensils(filteredRecipes);
  selectTag(filteredRecipes);
};

const selectTag = (filteredRecipes) => {
  tagIngr(filteredRecipes);
  tagApp(filteredRecipes);
  tagUst(filteredRecipes);
  principaleSearch(filteredRecipes);
  selectRecipe()
};

const principaleSearch = (filteredRecipes) => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      document.getElementById("recipes").innerHTML = "";
      const secondfilteredRecipes = [];
      filteredRecipes.filter((recipe) => filterRecipes(element, recipe, secondfilteredRecipes))
    }
    error(e);
  })
}

const selectRecipe = () => {
  const recips = document.querySelectorAll('.recipe');
  recips.forEach(recipe => {
    recipe.addEventListener('click', function() {
      console.log(this.querySelector('p').textContent);
    });
  });
};



const error = (e) => {
  if (document.getElementById("recipes").innerHTML === "") {
    alert(
      "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
    );
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

/*ingredient*****************************************************/

const ingredients = (filteredRecipes) => {
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
        <li class="ingrsC">${ingr}</li>
      `;
  });
};


const tagIngr = (filteredRecipes) => {
  const ingrsC = document.querySelectorAll(".ingrsC");
  ingrsC.forEach((ingrC) => {
    const ingrCid = ingrC.textContent.toLowerCase().replaceAll(" ", "");
    const btnIdIngr = [...ingrCid].reverse().join("");
    ingrC.addEventListener("click", (e) => {
        ingrC.remove();
        document.getElementById("tags").innerHTML += `
          <button
            type="button"
            class="tags tag btn btn-primary my-3 d-flex align-items-center justify-content-between"
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
        filterTag(ingrC.textContent, filteredRecipes);
        closeTagIngrs(filteredRecipes);
        error(e);
        
    });
  });
};

const closeTagIngrs = (filteredRecipes) => {
  const ingrsX = document.querySelectorAll(".sX");

  ingrsX.forEach((ingrX) => {
    const btnX = [...ingrX.id].reverse().join("");
    ingrX.addEventListener("click", () => {

      document.getElementById(btnX).remove();
      const tags = document.querySelectorAll(".tags.tag.txt");
      if (tags.length >0) {
        const tagss = [];
        tags.forEach(tag => {
          tagss.push(tag.textContent)
        })
        filterTag(tagss[tagss.length - 1].textContent, filteredRecipes);
      } 
      else {
        console.log(filteredRecipes);
        document.getElementById('recipes').innerHTML = "";
        filteredRecipes.forEach(tabb => {
          displayRecipe(tabb);
        })
        displayResults(filteredRecipes);
      }
    });
  });
};

const ingredientsFilter = (filteredRecipes) => {
  const t1ingr = [];
  const t1ingRecipe = [];
  const ingrs = document.querySelector(".ingredients");
  const searchUserIngredient = document.getElementById("searchIngredient");
  searchUserIngredient.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      ingrs.innerHTML = "";
      filteredRecipes.filter((recipe) => {
        recipe.ingredients.forEach((el) => {
          if (el.ingredient.toLowerCase().match(element)) {
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
        <li class="ingrsC">${el}</li>
      `;
      });
      selectTag(ut1ingRecipe);
    }
  });
};

/*APPAREIL******************************************************/

const appareils = (filteredRecipes) => {
  const apps = document.querySelector(".appareil");
  apps.innerHTML = "";
  const tapp = [];
  filteredRecipes.forEach((app) => {
    tapp.push(app.appliance.toLowerCase());
  });
  const appTab = [...new Set(tapp)];
  appTab.forEach((el) => {
    const app = JSON.stringify(el);
    const appp = app.replaceAll('"', "");
    apps.innerHTML += `
        <li class="appsC">${appp}</li>
      `;
  });

};

const tagApp = (filteredRecipes) => {
  const appsC = document.querySelectorAll(".appsC");
  appsC.forEach((appC) => {
    const appCid = appC.textContent.toLowerCase().replaceAll(" ", "");
    const btnIdApp = [...appCid].reverse().join("");
    appC.addEventListener("click", (e) => {
        appC.remove();
        document.getElementById("tags").innerHTML += `
          <button
            type="button"
            class="btn btn-primary my-3 d-flex align-items-center justify-content-between"
            id=${btnIdApp}
          >
            <p  >${appC.textContent}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle sX"
              id=${appCid}
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>`;
        closeTagApps(filteredRecipes);
        filterTag(appC.textContent, filteredRecipes);
        error(e);

      
    });
  });
};

const closeTagApps = (filteredRecipes) => {
  const appsX = document.querySelectorAll(".sX");
  console.log(appsX);
  appsX.forEach((appX) => {
    const btnX = [...appX.id].reverse().join("");
    appX.addEventListener("click", () => {
      document.getElementById(btnX).remove();
      const tags = document.querySelectorAll(".tags.tag.txt");
      if (tags.length >0) {
        const tagss = [];
        tags.forEach(tag => {
          tagss.push(tag.textContent)
        })
        filterTag(tagss[tagss.length - 1].textContent, filteredRecipes);
      } else {
        console.log(filteredRecipes);
        document.getElementById('recipes').innerHTML = "";
        filteredRecipes.forEach(tabb => {
          displayRecipe(tabb);
        })
        displayResults(filteredRecipes);
      }
    });
  });
};

const appareilsFilter = (filteredRecipes) => {
  const t1app = [];
  const t1appRecipe = [];
  const apps = document.querySelector(".appareil");
  const searchUserAppareil = document.getElementById("searchAppareil");
  searchUserAppareil.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      apps.innerHTML = "";
      filteredRecipes.filter((recipe) => {
        if (recipe.appliance.toLowerCase().match(element)) {
          t1app.push(recipe.appliance.toLowerCase());
          t1appRecipe.push(recipe);
        }
      });
      const ut1appRecipe = [...new Set(t1appRecipe)];
      apps.innerHTML = "";
      const uTab = [...new Set(t1app)];
      uTab.forEach((el) => {
        apps.innerHTML += `
        <li class="appsC">${el}</li>
      `;
      });
      selectTag(ut1appRecipe);
    }
  });
};

/*USTENSILE******************************************************/

const ustensils = (filteredRecipes) => {
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
        <li class="ustsC">${ustt}</li>
    `;
  });
};
const tagUst = (filteredRecipes) => {
  const ustsC = document.querySelectorAll(".ustsC");
  ustsC.forEach((ustC) => {
    const ustCid = ustC.textContent.toLowerCase().replaceAll(" ", "");
    const btnIdUst = [...ustCid].reverse().join("");
    ustC.addEventListener("click", (e) => {
        ustC.remove();
        document.getElementById("tags").innerHTML += `
        <button
          type="button"
          class="btn btn-primary my-3 d-flex align-items-center justify-content-between"
          id=${btnIdUst}
        >
          <p >${ustC.textContent}</p>
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
        closeTagUsts(filteredRecipes);
        filterTag(ustC.textContent, filteredRecipes);
        error(e);

    });
  });
};

const closeTagUsts = (filteredRecipes) => {
  const ustsX = document.querySelectorAll(".sX");
  const ustsCC = document.querySelector(".ustensiles");

  ustsX.forEach((ustX) => {
    console.log(ustX);
    const btnX = [...ustX.id].reverse().join("");
    ustX.addEventListener("click", () => {
      console.log(btnX);
      document.getElementById(btnX).remove();
      const tags = document.querySelectorAll(".tags.tag.txt");
      if (tags.length >0) {
        const tagss = [];
        tags.forEach(tag => {
          tagss.push(tag.textContent)
        })
        filterTag(tagss[tagss.length - 1].textContent, filteredRecipes);


      } else {
        console.log(filteredRecipes);
        document.getElementById('recipes').innerHTML = "";
        filteredRecipes.forEach(tabb => {
          displayRecipe(tabb);
        })
        displayResults(filteredRecipes);
      }
    });
  });
};
const ustensilsFilter = (filteredRecipes) => {
  const t1Ust = [];
  const t1UstRecipe = [];
  const usts = document.querySelector(".ustensiles");
  const searchUserUstensils = document.getElementById("searchUstensiles");
  searchUserUstensils.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      usts.innerHTML = "";
      filteredRecipes.filter((recipe) => {
        recipe.ustensils.forEach((el) => {
          if (el.toLowerCase().match(element)) {
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
        <li class="ustsC">${el}</li>
      `;
      });
      selectTag(ut1UstRecipe);
    }
  });
};

main();