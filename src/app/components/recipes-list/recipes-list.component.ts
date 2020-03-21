import { Recipe } from "../../models/recipes.model";
import { Component } from "@angular/core";
import { RecipesService } from "src/app/services/recipes/recipes.service";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent {
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
