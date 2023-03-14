class Ingredient {
  constructor(data) {
    this.ingredient = data.ingredient;
    this.quantity = data.quantity;
    this.unit = data.unit;
  }

  get displayIngredient() {
    if (this.quantity === undefined && this.unit === undefined) {
      return `
        <li class="recipe-body_bot_ingredients"><span class="recipe-body_bot_ingredients_ingredient">${this.ingredient}</span></li>
      `;
    }
    return `
        <li class="recipe-body_bot_ingredients_ingredient">
          <span class="recipe-body_bot_ingredients_ingredient">${
            this.ingredient
          }:</span>
          <span class="recipe-body_bot_ingredients_ingredient_qt">
            ${this.quantity || ""} ${this.unit || ""}
          </span>
        </li>
      `;
  }
}
