import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { RecipeDetailGuard } from './recipe-guard.service';
import { RecipeService } from './recipe.service';

@NgModule({
    declarations: [
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeFilterPipe],
    imports: [

        SharedModule,
        RouterModule.forChild([
            { path: 'recipes', component: RecipeListComponent },
            { path: 'recipe/:id', 
                canActivate: [ RecipeDetailGuard ],
                component: RecipeDetailComponent },

        ])
    ],
    providers: [
        RecipeService,
        RecipeDetailGuard
    ]
})
export class RecipeModule {}