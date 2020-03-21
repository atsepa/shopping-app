import { Recipe } from 'src/app/models/recipes.model';
import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';
import { RecipesService } from 'src/app/services/recipes/recipes.service';

@Component({
	selector: 'app-recipes-detail',
	templateUrl: './recipes-detail.component.html',
	styleUrls: [
		'./recipes-detail.component.scss'
	]
})
export class RecipesDetailComponent implements OnInit {
	@Input() details: Recipe;

	constructor(private recipesService: RecipesService) {}

	ngOnInit(): void {}

	onAddToShoppingList(ingredients: Ingredient[]) {
		this.recipesService.addIngredientsToShoppingList(ingredients);
	}
}
