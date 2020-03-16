import { Recipe } from '../../models/recipes.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {

  @Output() onRecipeDetail = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('Test','This is a test','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg')
  ]

  constructor() { }

  ngOnInit(): void {

  }

  handelRecipeClick(recipe: Recipe){
    console.log('handelRecipeClick', recipe)
    this.onRecipeDetail.emit(recipe);
  }

}
