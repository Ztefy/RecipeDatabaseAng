import { PipeTransform, Pipe } from '@angular/core';
import { IRecipe } from './recipe';

@Pipe({
    name: 'recipeFilter'
})

export class RecipeFilterPipe implements PipeTransform {

    transform(value: IRecipe[], filterBy: string): IRecipe[] { 
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((recipe: IRecipe) =>
            recipe.recipeName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;        ;
    }
}