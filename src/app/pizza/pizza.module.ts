import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PizzaListComponent} from './pizza-list/pizza-list.component';
import {MaterialModule} from '../shared';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {PizzaListResolver} from './pizza.resolver.service';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    PizzaListComponent,
  ],

  providers: [
  ],

  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PizzaListComponent,
        resolve: { resolvedPizzaListData: PizzaListResolver }
      },
    ] )
  ]
})
export class PizzaModule { }
