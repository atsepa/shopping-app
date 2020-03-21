import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {
	ingredientChanged = new EventEmitter<Ingredient[]>();

	private _ingredients: Ingredient[] = [
		new Ingredient('apple', 5),
		new Ingredient('tomatoes', 10),
		new Ingredient('potato', 22)
	];

	constructor() {}

	getIngredients() {
		return this._ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this._ingredients.push(ingredient);
		this.ingredientChanged.emit(this._ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]) {
		this._ingredients.push(...ingredients);
		this.ingredientChanged.emit(this._ingredients.slice());
	}
}
