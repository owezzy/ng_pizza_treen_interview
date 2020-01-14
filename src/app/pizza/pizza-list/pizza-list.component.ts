import {Component, OnInit} from '@angular/core';
import {PizzaModel} from '../../shared';
import {PizzaService} from '../pizza.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],

})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaService: PizzaService,
              private route: ActivatedRoute) {
  }

  pizzas;

 // data-table dataSource
  public displayedColumns = ['Name', 'Description', 'Toppings'];


   ngOnInit(): void {
     // access data from the router snapshot
     this.pizzas = this.route.snapshot.data.resolvedPizzaListData;
   }
}
