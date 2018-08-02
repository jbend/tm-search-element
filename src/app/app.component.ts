import { Component, ViewEncapsulation, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { SearchService } from './search.service';
import { Trace, Order } from './models';
import { take, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  @Input() traceType = '';
  focus: string;
  focusSet = false;

  order$: Observable<Order>;

  constructor(private searchService: SearchService) { }

  search(value) {
    this.order$ = this.searchService.traceNumberSearch(value).pipe(
      map(res => res[0].orderId),
      switchMap(res => this.searchService.fetchOrder(res))
    );

    this.focusSet = true;
  }

  setFocus(value) {
    this.focus = value;
    this.focusSet = true;
  }

}
