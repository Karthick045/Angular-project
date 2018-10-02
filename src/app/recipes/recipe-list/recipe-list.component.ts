import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes :Recipe[] = [
  new Recipe('A test Recipe','licking so good','https://mir-s3-cdn-cf.behance.net/project_modules/fs/a6556d56754573.59bac462be6f8.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
