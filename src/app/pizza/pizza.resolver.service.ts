import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PizzaModel} from '../shared';
import {PizzaService} from './pizza.service';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {transformError} from '../shared';

@Injectable({
    providedIn: 'root'
})
export class PizzaListResolver implements Resolve<PizzaModel[]> {

    constructor(private pizzaService: PizzaService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<PizzaModel[]> {
        return this.pizzaService.getPizzas()
            .pipe(
                tap(data => console.log('ResolvedPizzaList: ', JSON.stringify(data))),
                catchError(transformError)
            );
    }
}
