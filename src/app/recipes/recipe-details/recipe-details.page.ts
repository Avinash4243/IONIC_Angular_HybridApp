import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  recipeDetails: Recipe;
  constructor(private activatedRoute: ActivatedRoute,
              private recipesServ: RecipeService,
              private router: Router,
              private alert: AlertController) { }

  ngOnInit() {
    console.log('Recipe details page is getting loaded....');
    this.activatedRoute.paramMap.subscribe(param => {
      if (!param.has('recipeId')) {
        return;
      }
      const recipeId = +param.get('recipeId');
      this.recipeDetails = this.recipesServ.getRecipeById(recipeId);
    });
  }

  deleteRecipe(recipeId) {
    this.alert.create({
    header: 'Are you sure?', 
    message: 'Do you really want to delete this recipe?', 
    buttons: [{
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Delete',
      handler: () => {
        this.recipesServ.deleteRecipe(recipeId);
        this.router.navigate(['/recipes']);
      }
    }]
  }).then(alerCtrl => {
    alerCtrl.present();
  });
  }
}
