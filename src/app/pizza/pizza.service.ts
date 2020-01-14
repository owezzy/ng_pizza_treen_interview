import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PizzaModel} from '../shared';
import {catchError, tap} from 'rxjs/operators';
import {transformError} from '../shared';

@Injectable({
    providedIn: 'root'
})
export class PizzaService {
    private pizzasUrl = 'https://pizza.jptreen.com/api/pizzas';

    constructor(private http: HttpClient) {
    }

    getPizzas(): Observable<PizzaModel[]> {
        return this.http.get<PizzaModel[]>(this.pizzasUrl)
            .pipe(
                tap(data => console.log('GetPizzaList: ', JSON.stringify(data))),
                catchError(transformError));
    }


    // CRUD operations functions
}
