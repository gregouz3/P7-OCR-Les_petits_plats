const displayAppareils = (recipes) => {
  const apps = document.querySelector(".appareil");
  apps.innerHTML = "";
  const tapp = [];
  recipes.forEach((app) => {
    tapp.push(app.appliance.toLowerCase());
  });
  const appTab = [...new Set(tapp)];
  appTab.forEach((el) => {
    const app = JSON.stringify(el);
    const appp = app.replaceAll('"', "");
    apps.innerHTML += `
          <li class="appsC" title="Filter les recettes avec le tag : ${appp}">${appp}</li>
        `;
  });
  filterAppareilsInSearchBar(recipes);
};

const filterAppareilsInSearchBar = (recipes) => {
  const apps = document.querySelector(".appareil");
  const searchUserAppareil = document.getElementById("searchAppareil");
  searchUserAppareil.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    if (element.length >= 3) {
      const t1app = [];
      const t1appRecipe = [];
      apps.innerHTML = "";
      recipes.filter((recipe) => {
        if (recipe.appliance.toLowerCase().includes(element)) {
          t1app.push(recipe.appliance.toLowerCase());
          t1appRecipe.push(recipe);
        }
      });
      const ut1appRecipe = [...new Set(t1appRecipe)];
      apps.innerHTML = "";
      const uTab = [...new Set(t1app)];
      uTab.forEach((el) => {
        apps.innerHTML += `
            <li class="appsC"  title="Filter les recettes avec le tag : ${el}">${el}</li>
          `;
      });
    } else if (!element.length) {
      displayAppareils(recipes);
    }
  });
};
