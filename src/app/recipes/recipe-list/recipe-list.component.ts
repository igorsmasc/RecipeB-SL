import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Coconut Cream Pound Cake', '"A moist coconut pound cake, a crowd pleaser. I use this recipe for making wedding cake layers."', 'https://images.media-allrecipes.com/userphotos/560x315/4538939.jpg'),
    new Recipe('Savory Croissant Quiche', '"Do you ever want to use all the ingredients you have in your refrigerator or pantry? Well this is just one thing I did. I hope you enjoy!"', 'https://images.media-allrecipes.com/userphotos/560x315/4422360.jpg'),
    new Recipe('Juicy Lucy Burgers', '"A favorite of Minnesotans! The famous Juicy Lucy! Mmmm. So good. You MUST use American cheese on this to achieve the juiciness in the middle! I like sauteed mushrooms and onions on mine!"', 'https://images.media-allrecipes.com/userphotos/720x405/995492.jpg'),
    new Recipe('Fluffy and Delicious Pancakes', '"Tall, fluffy pancakes are delicious served with butter, syrup, and whipped cream. These tasty pancakes taste like cake. Just go by your instinct and enjoy the baking. Yummy!"', 'https://images.media-allrecipes.com/userphotos/720x405/1090164.jpg'),
    new Recipe('Spicy Hot Chicken Legs', '"This is just like spicy chicken wings, only less work. Cooks up nicely in the slow cooker! A quick meal that is super easy and oh so yummy! For crispier chicken, bake in a 400 degrees F oven for the final 30 minutes."', 'https://images.media-allrecipes.com/userphotos/720x405/994208.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
