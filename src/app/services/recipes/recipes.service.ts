import { Recipe } from 'src/app/models/recipes.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
	providedIn: 'root'
})
export class RecipesService {
	recipeSelected = new EventEmitter<Recipe>();

	private _recipes: Recipe[] = [
		new Recipe(
			'Fajitas',
			'This is a test',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
			[
				new Ingredient('pork', 3),
				new Ingredient('french fries', 20)
			]
		),
		new Recipe(
			'Burger',
			'This is a test2',
			'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
			[
				new Ingredient('meat', 5)
			]
		)
	];

	constructor(private shoppingListService: ShoppingListService) {}

	getRecipes() {
		return this._recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}
}
