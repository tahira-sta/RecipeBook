import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.module';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 10),
    new Ingredients('Oranges', 20),
  ];

  constructor() { }

  ngOnInit() {
  }

}
