import {displayRecipes, displayResults} from "./displays.js";
import {filterRecipesWithPrincipaleSearchBar} from "./filters.js";

const main = () => {
    displayRecipes();
    filterRecipesWithPrincipaleSearchBar(recipes);
    displayResults(recipes);
}

main();