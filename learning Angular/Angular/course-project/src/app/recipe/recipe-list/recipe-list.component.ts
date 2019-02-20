import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[]=[
    new Recipe("A test Recipe","This is just a text","https://cdn.pixabay.com/photo/2016/06/15/18/09/fodd-1459693_960_720.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
