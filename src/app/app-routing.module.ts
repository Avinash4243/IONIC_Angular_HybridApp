import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'recipes',
    children: [
      {path: '',  loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)},
      {path: ':recipeId',  loadChildren: './recipes/recipe-details/recipe-details.module#RecipeDetailsPageModule'}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('App module loaded !!!');
  }
}
