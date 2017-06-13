import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
    moduleId: module.id,
    templateUrl: 'recipe-list.component.html',
    styleUrls: ['recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
      pageTitle: string = 'Recipe List';
      imageWidth: number = 50;
      imageMargin: number = 2;
      showImage: boolean = false;
      listFilter: string;
      errorMessage: string;

      recipes: IRecipe[];
      
      constructor(private _recipeService: RecipeService){

      }

      toggleImage(): void {
          this.showImage = !this.showImage;
      }

      ngOnInit(): void {
          this._recipeService.getRecipes()
            .subscribe(recipes => this.recipes = recipes,
                error => this.errorMessage = <any>error);
      }

      onRatingClicked(message: string): void{
          this.pageTitle = 'Recipe List: ' + message;
      }
}