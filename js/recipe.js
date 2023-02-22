class Recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.appliance = data.appliance;
    this.time = data.time;
    this.description = data.description;
    this.ingredients = data.ingredients;
    this.ustensils = data.ustensils;
  }

  get ingredient() {
    this.ingredientee = [];
    this.ingredients.forEach((ingredient) => {
      const ingrediente = new Ingredient(ingredient);
      this.ingredientee += ingrediente.displayIngredient;
    });
  }

  get descriptionAbreg() {
    const descriptionAbregee = this.description.slice(0, 150);
    const descriptionAbregeeppp = descriptionAbregee.concat('...');
    this.description = descriptionAbregeeppp;
  }

  get recipeCard() {
    this.ingredient;
    this.descriptionAbreg;
    return `
    <li class="recipe" title="Sélectionner la recette : ${this.name}">
        <div class="recipe-img-top"></div>
        <div class="recipe-body">
          <div class="d-flex justify-content-between recipe-body_top">
            <h3 class="recipe-body_top_name">${this.name}</h3>
            <p class="recipe-body_top_time">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              <span class="recipe-body_top_time_value">${this.time} min</span>
            </p>
          </div>
          <div class="recipe-body_bot d-flex justify-content-between">
            <ul class="recipe-body_bot_ingredients">
            ${this.ingredientee}
            </ul>
           
            <p class="recipe-body_bot_description">${this.description}</p>
        </div>
      </div>
    </li>
    `;
  }
}
