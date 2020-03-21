import { Component, Input } from "@angular/core";
import { Recipe } from "src/app/models/recipes.model";
import { RecipesService } from "src/app/services/recipes/recipes.service";

@Component({
  selector: "app-recipes-item",
  templateUrl: "./recipes-item.component.html",
  styleUrls: ["./recipes-item.component.scss"]
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  onItemClick(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
  }
}
