const displayUstensils = (recipes) => {
  const usts = document.querySelector(".ustensiles");
  usts.innerHTML = "";
  const tUst = [];
  recipes.forEach((ust) => {
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
  filterUstensilsInSearchBar(recipes);
};

const filterUstensilsInSearchBar = (recipes) => {
  const usts = document.querySelector(".ustensiles");
  const searchUserUstensils = document.getElementById("searchUstensiles");
  searchUserUstensils.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const t1Ust = [];
      const t1UstRecipe = [];
      usts.innerHTML = "";
      recipes.filter((recipe) => {
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
    } else if (!element.length) {
      displayUstensils(recipes);
    }
  });
};
