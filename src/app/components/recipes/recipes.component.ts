import { Component, OnInit } from "@angular/core";
import { Recipe } from "src/app/models/recipes.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  recipeDetails: Recipe;
  constructor() {}

  ngOnInit(): void {}

  handleOnRecipeDetail(recipe: Recipe) {
    this.recipeDetails = recipe;
  }
}
