import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: [
		'./shopping-edit.component.scss'
	]
})
export class ShoppingEditComponent {
	@ViewChild('nameInput', { static: false })
	nameInput: ElementRef;

	@ViewChild('amountInput', { static: false })
	amountInput: ElementRef;

	constructor(private shoppingListService: ShoppingListService) {}

	onAddItem() {
		const name = this.nameInput.nativeElement.value;
		const amount = this.amountInput.nativeElement.value;

		const newIngredient = new Ingredient(name, amount);
		this.shoppingListService.addIngredient(newIngredient);
	}
}
