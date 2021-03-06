import { Component, OnInit } from '@angular/core';
import { Recipe }  from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', 'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?webp=true&quality=45&crop=9px%2C2330px%2C5697px%2C2451px&resize=1880%2C799'),
    new Recipe('A Test Recipe 2', 'This is simply test 2', 'https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
