import { Component, OnInit } from "@angular/core";
import { Recipe } from "src/app/models/recipes.model";
import { RecipesService } from "src/app/services/recipes/recipes.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  recipeDetails: Recipe;
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeDetails = recipe;
    });
  }
}
