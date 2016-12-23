import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Restaurant } from './Restaurant';
// import { Subject } from '@reactivex/rxjs/dist/es6/Subject';
import {Observable} from 'rxjs/Rx';
import './rxjs-operators';

@Injectable()
export class RestaurantService {
    private restaurantsUrl = '';

    constructor(private http:Http) {}

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get(this.restaurantsUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    
    private handleError(error: Response | any) {
        let errMsg: string;
        if(error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}