const error = (e) => {
    if (document.getElementById("recipes").innerHTML === "")  {
      alert(
        "« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
      );
      e.target.value = "";
      //integre error niveau tag 
      displayRecipes();
    } 
  
  };

  const selectRecipe = () => {
    const recips = document.querySelectorAll('.recipe');
    recips.forEach(recipe => {
      recipe.addEventListener('click', function() {
        console.log(this.querySelector('p').textContent);
      });
    });
  };