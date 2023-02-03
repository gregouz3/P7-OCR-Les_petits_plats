import Ingredient from "./ingredient.js";

export default class Recipe {
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
  selectCard() {
    console.log(`Selected recipe: ${this.name}`);
  }
  get recipeCard() {
    this.ingredient;
    return `
    <li class="recipe col-4" onclick=${this.selectCard()}>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <p>${this.name}</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>${this.time} min</p>
          </div>
          <div class="d-flex justify-content-between">
            <ul class="ingredients">
            ${this.ingredientee}
            </ul>
            <p>${this.description}</p>
          </div>
        </div>
      </div>
    </li>
    `;
  }
}