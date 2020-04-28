import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';


@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg'),
    new Recipe('Pomodoro Sauce', 'Light and easy to make with fresh tomatoes, this simple Southern Italian tomato sauce takes just 20',
      'https://www.foodiecrush.com/wp-content/uploads/2019/07/Pomodoro-Sauce-foodiecrush.com-015.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
