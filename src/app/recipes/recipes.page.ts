import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(private recipesServ: RecipeService) {
    console.log('Recipe page is getting created///');
   }

  ngOnInit() {
    this.recipes = this.recipesServ.getAllRecipes();
  }

}
