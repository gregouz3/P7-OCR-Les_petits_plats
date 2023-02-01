export default class Ingredient {
  constructor(data) {
    this.ingredient = data.ingredient;
    this.quantity = data.quantity;
    this.unit = data.unit;
  }
  get displayIngredient() {
    if (this.quantity === undefined && this.unit === undefined) {
      return `
        <li><span>${this.ingredient}</span></li>
      `;
    }
    if (this.unit == undefined) {
      return `
        <li><span>${this.ingredient}:</span> ${this.quantity}</li>
      `;
    } else {
      return `
        <li><span>${this.ingredient}:</span> ${this.quantity}${this.unit}</li>
      `;
    }
  }
}

