import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [{
    id: 1,
    name: 'Aloo Gobi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Aloo_gobi.jpg',
    category: 'Veg',
    ingredients: ['Curry Leaves', 'Garlic', 'Ginger', 'Onions']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg',
    category: 'Non Veg',
    ingredients: ['Raw Chicken', 'Coriander', 'Chicken tikka masala', 'Tamarind chutney']
  },
];
  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipeById(recipeId: number): Recipe {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(id) {
    this.recipes =  this.recipes.filter(recipe => {
      return recipe.id !== id;
    });
  }
}
