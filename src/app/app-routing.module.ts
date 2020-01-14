import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {SelectiveStrategyService} from './selective-strategy.service';



@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'welcome', component: HomeComponent },
    { path: 'pizzas',
      data: {preload: true},
      loadChildren: () => import('./pizza/pizza.module').then( p => p.PizzaModule)
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
    ], {enableTracing: true, preloadingStrategy: SelectiveStrategyService})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
