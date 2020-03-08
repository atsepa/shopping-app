import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('tomatoe', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
