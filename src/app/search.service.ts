import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Order, OrderDetail, OrderStatus, OrderTrace } from './models';
import { Trace } from './models';

const baseUrl = 'http://localhost:8095/s/';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public traceNumberSearch(needle: string): Observable<Trace[]> {
    const url = `${baseUrl}search?traceNumber=${needle.trim()}`;
    return this.http.get(url).pipe(
      map(res => res['search']),
      catchError(this.handleError)
    );
  }

  public fetchOrder(orderId: number): Observable<Order> {
    const url = `${baseUrl}orders/${orderId}?expand=status`;
    return this.http.get<Order>(url).pipe(
      catchError(this.handleError)
    );
  }

  handleError(httpErr: HttpErrorResponse) {
    if (httpErr.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${httpErr.error.message}`);
    } else {
      console.error(
        `Server error response code ${httpErr.status}, body: ${httpErr.error}`
      );
    }
    return observableThrowError(httpErr);
  }

}
