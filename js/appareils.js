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
  appendTagAppareil();
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
const appendTagAppareil = () => {
  const appsC = document.querySelectorAll(".appsC");
  appsC.forEach((appC) => {
    const appCid = appC.textContent.toLowerCase().replaceAll(" ", "");
    const btnIdApp = [...appCid].reverse().join("");
    appC.addEventListener("click", (e) => {
      document.getElementById("tags").innerHTML += `
            <button
              type="button"
              class="tags tag--app btn d-flex align-items-center"
              id=${btnIdApp}
            >
              <p class="tags tag txt">${appC.textContent}</p>
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
      document.getElementById("recipes").style.top = "22.5rem";
      closeTagAppareil();
    });
  });
};

const closeTagAppareil = () => {
  const appsX = document.querySelectorAll(".sX");
  const tags = document.querySelectorAll(".tags.tag.txt");
  appsX.forEach((appX) => {
    const btnX = [...appX.id].reverse().join("");
    appX.addEventListener("click", () => {
      document.getElementById(btnX).remove();
      if (tags.length === 1) {
        document.querySelector("#recipes").style.top = "19.5rem";
      }
    });
  });
};
