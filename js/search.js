import recipes from "./recipes.js";
import displayRecipe from "./index.js";

const search = () => {
  const searchUser = document.getElementById("searchInput");
  searchUser.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const tab = [];
      document.getElementById("recipes").innerHTML = "";
      recipes.filter((recipe) => filter1(element, recipe, tab));
      search2(tab);
      displayTag(tab);
    }
    error(e);
  });
};

const filter1 = (element, recipe, tab) => {
  if (
    recipe.name.toLowerCase().match(element) ||
    recipe.description.toLowerCase().match(element)
  ) {
    displayRecipe(recipe);
    tab.push(recipe);
  } else if (
    !recipe.name.toLowerCase().match(element) &&
    !recipe.description.toLowerCase().match(element)
  ) {
    recipe.ingredients.forEach((el) => {
      if (el.ingredient.toLowerCase().match(element)) {
        displayRecipe(recipe);
        tab.push(recipe);
      }
    });
  }
};

const error = (e) => {
  if (document.getElementById("recipes").innerHTML === "") {
    alert(
      "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
    );
    document.getElementById("recipes").innerHTML = "";
    e.target.value = "";
    recipes.forEach((recipe) => {
      displayRecipe(recipe);
    });
    
  }
};

const search2 = (tab) => {
  console.log(tab);
  search2ingredients(tab);
  search2appareils(tab);
  search2ustensils(tab);
};

 const displayTag = (tab) => {
  ingredients(tab);
  appareils(tab);
  ustensils(tab);
  selectTag();
};

const selectTag = () => {
  tagIngr();
  tagApp();
  tagUst();
};

/*ingredient*****************************************************/

const ingredients = (tab) => {
  const ingrs = document.querySelector(".ingredients");
  ingrs.innerHTML = "";
  const tingr = [];
  tab.forEach((tabb) => {
    tabb.ingredients.forEach((ingr) => {
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

const tagIngr = () => {
  const ingrsC = document.querySelectorAll(".ingrsC");
  ingrsC.forEach((ingrC) => {
    const ingrCid = ingrC.textContent.toLowerCase().replaceAll(" ", "");
    const btnIdIngr = [...ingrCid].reverse().join("");
    ingrC.addEventListener("click", () => {
      console.log(btnIdIngr);
      console.log(document.getElementById(btnIdIngr));
      if (!document.getElementById(btnIdIngr)) {
        console.log(document.getElementById(btnIdIngr));

        document.getElementById("tags").innerHTML += `
          <button
            type="button"
            class="btn btn-primary my-3 d-flex align-items-center justify-content-between"
            id=${btnIdIngr}
          >
            <p >${ingrC.textContent}</p>
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
        closeTagIngrs();
      }
    });
  });
};

const closeTagIngrs = () => {
  const ingrsX = document.querySelectorAll(".sX");
  console.log(ingrsX);
  ingrsX.forEach((ingrX) => {
    console.log(ingrX);
    const btnX = [...ingrX.id].reverse().join("");
    ingrX.addEventListener("click", () => {
      console.log(btnX);
      document.getElementById(btnX).remove();
    });
  });
};

const search2ingredients = (tab) => {
  const t1ingr = [];
  const t1ingRecipe = [];
  const ingrs = document.querySelector(".ingredients");
  const searchUserIngredient = document.getElementById("searchIngredient");
  searchUserIngredient.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      ingrs.innerHTML = "";
      document.getElementById("searchAppareil").value = "";
      document.getElementById("searchUstensiles").value = "";
      document.querySelector(".appareil").innerHTML = "";
      document.querySelector(".ustensiles").innerHTML = "";
      document.getElementById("recipes").innerHTML = "";
      tab.filter((recipe) => {
        recipe.ingredients.forEach((el) => {
          if (el.ingredient.toLowerCase().match(element)) {
            t1ingr.push(el.ingredient.toLowerCase());
            t1ingRecipe.push(recipe);
          }
        });
      });
      console.log(t1ingRecipe);
      const ut1ingRecipe = [...new Set(t1ingRecipe)];
      console.log(ut1ingRecipe);
      ingrs.innerHTML = "";
      document.querySelector(".appareil").innerHTML = "";
      document.querySelector(".ustensiles").innerHTML = "";
      document.getElementById("recipes").innerHTML = "";
      ut1ingRecipe.forEach((recipe) => {
        displayRecipe(recipe);
        appareils(ut1ingRecipe);
        ustensils(ut1ingRecipe);
      });
      const uTab = [...new Set(t1ingr)];
      console.log(uTab);
      uTab.forEach((el) => {
        const ingredient = JSON.stringify(el);
        ingrs.innerHTML += `
        <li>${ingredient}</li>
      `;
      });
      search2appareils(ut1ingRecipe);
      search2ustensils(ut1ingRecipe);
    }
  });
};

/*APPAREIL******************************************************/

const appareils = (tab) => {
  const apps = document.querySelector(".appareil");
  apps.innerHTML = "";
  const tapp = [];
  tab.forEach((app) => {
    tapp.push(app.appliance.toLowerCase());
  });
  const appTab = [...new Set(tapp)];
  appTab.forEach((el) => {
    const app = JSON.stringify(el);
    apps.innerHTML += `
        <li class="appsC">${app}</li>
      `;
  });
};

const tagApp = () => {
  const appsC = document.querySelectorAll(".appsC");
  appsC.forEach((appC) => {
    const appCid = appC.textContent.toLowerCase().replaceAll(" ", "");
    const btnIdApp = [...appCid].reverse().join("");
    const textId = "";
    const tabApp = [];
    appC.addEventListener("click", () => {
      if (tabApp.length == 0) {
        document.getElementById("tags").innerHTML += `
          <button
            type="button"
            class="btn btn-primary my-3 d-flex align-items-center justify-content-between"
            id=${btnIdApp}
          >
            <p id=${textId} >${appC.textContent}</p>
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
        console.log(document.getElementById("btnIdApp"));
        tabApp.push(document.getElementById("btnIdApp"));
        console.log(tabApp);
        closeTagApps();
      }
    });
  });
};

const closeTagApps = () => {
  const appsX = document.querySelectorAll(".sX");
  console.log(appsX);
  appsX.forEach((appX) => {
    const btnX = [...appX.id].reverse().join("");
    appX.addEventListener("click", () => {
      console.log(btnX);
      document.getElementById(btnX).remove();
    });
  });
};
const search2appareils = (tab) => {
  const t1app = [];
  const t1appRecipe = [];
  const apps = document.querySelector(".appareil");
  const searchUserAppareil = document.getElementById("searchAppareil");
  searchUserAppareil.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      apps.innerHTML = "";
      document.getElementById("searchIngredient").value = "";
      document.getElementById("searchUstensiles").value = "";
      document.querySelector(".ingredients").innerHTML = "";
      document.querySelector(".ustensiles").innerHTML = "";
      document.getElementById("recipes").innerHTML = "";

      tab.filter((recipe) => {
        if (recipe.appliance.toLowerCase().match(element)) {
          t1app.push(recipe.appliance.toLowerCase());
          t1appRecipe.push(recipe);
        }
      });
      const ut1appRecipe = [...new Set(t1appRecipe)];
      console.log(ut1appRecipe);

      document.getElementById("recipes").innerHTML = "";
      apps.innerHTML = "";
      ut1appRecipe.forEach((recipe) => {
        displayRecipe(recipe);
        ingredients(ut1appRecipe);
        ustensils(ut1appRecipe);
      });

      const uTab = [...new Set(t1app)];
      console.log(uTab);
      uTab.forEach((el) => {
        const app = JSON.stringify(el);
        apps.innerHTML += `
        <li>${app}</li>
      `;
      });
      search2ingredients(ut1appRecipe);
      search2ustensils(ut1appRecipe);
    }
  });
};

/*USTENSILE******************************************************/

const ustensils = (tab) => {
  const usts = document.querySelector(".ustensiles");
  usts.innerHTML = "";
  const tUst = [];
  tab.forEach((ust) => {
    ust.ustensils.forEach((ustt) => {
      tUst.push(ustt.toLowerCase());
    });
  });
  const ustab = [...new Set(tUst)];
  ustab.forEach((el) => {
    const ust = JSON.stringify(el);
    usts.innerHTML += `
        <li class="ustsC">${ust}</li>
    `;
  });
};
const tagUst = () => {
  const ustsC = document.querySelectorAll(".ustsC");
  ustsC.forEach((ustC) => {
    const ustCid = ustC.textContent.toLowerCase().replaceAll(" ", "");
    const btnIdUst = [...ustCid].reverse().join("");
    const tabUst = [];
    ustC.addEventListener("click", () => {
      console.log(document.getElementById(btnIdUst));
      if (tabUst.length == 0) {
        console.log(document.getElementById(btnIdUst));
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
        tabUst.push(document.getElementById(btnIdUst));
        closeTagUsts();
      }
    });
  });
};

const closeTagUsts = () => {
  const ustsX = document.querySelectorAll(".sX");
  console.log(ustsX);
  ustsX.forEach((ustX) => {
    console.log(ustX);
    const btnX = [...ustX.id].reverse().join("");
    ustX.addEventListener("click", () => {
      console.log(btnX);
      document.getElementById(btnX).remove();
    });
  });
};
const search2ustensils = (tab) => {
  const t1Ust = [];
  const t1UstRecipe = [];
  const usts = document.querySelector(".ustensiles");
  const searchUserUstensils = document.getElementById("searchUstensiles");
  searchUserUstensils.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      usts.innerHTML = "";
      document.getElementById("searchIngredient").value = "";
      document.getElementById("searchAppareil").value = "";
      document.querySelector(".ingredients").innerHTML = "";
      document.querySelector(".appareil").innerHTML = "";
      document.getElementById("recipes").innerHTML = "";

      tab.filter((recipe) => {
        recipe.ustensils.forEach((el) => {
          if (el.toLowerCase().match(element)) {
            t1Ust.push(el.toLowerCase());
            t1UstRecipe.push(recipe);
          }
        });
      });
      const ut1UstRecipe = [...new Set(t1UstRecipe)];
      document.getElementById("recipes").innerHTML = "";
      ut1UstRecipe.forEach((recipe) => {
        displayRecipe(recipe);
        ingredients(ut1UstRecipe);
        appareils(ut1UstRecipe);
      });
      const uTab = [...new Set(t1Ust)];
      usts.innerHTML = "";
      uTab.forEach((el) => {
        const ust = JSON.stringify(el);
        usts.innerHTML += `
        <li>${ust}</li>
      `;
      });
      console.log(ut1UstRecipe);
      search2appareils(ut1UstRecipe);
      search2ingredients(ut1UstRecipe);
    }
  });
};

search();
