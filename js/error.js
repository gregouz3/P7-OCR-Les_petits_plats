const error = (e) => {
    if (document.getElementById("recipes").innerHTML === "") {
      alert(
        "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
      );
      document.getElementById("recipes").innerHTML = "";      
      document.getElementById("searchAppareil").value = "";
      document.getElementById("searchUstensiles").value = "";
      document.getElementById("searchIngredients").value = "";
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

  export default error;