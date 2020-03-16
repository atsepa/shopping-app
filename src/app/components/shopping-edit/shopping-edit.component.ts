import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false} ) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false} ) amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  onAddItem(){
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    
    const newIngredient = new Ingredient(name, amount);
    
    this.ingredientAdded.emit(newIngredient);
  }

}