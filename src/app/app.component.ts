import { Component, ViewEncapsulation, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { SearchService } from './search.service';
import { Trace } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  @Input() name = 'friend';
  focus: string;
  focusSet = false;

  searchResults$: Observable<Trace[]>;

  constructor(private searchService: SearchService) { }

  search(value) {
    this.searchResults$ = this.searchService.traceNumberSearch(value);
    this.focusSet = true;
  }

  setFocus(value) {
    this.focus = value;
    this.focusSet = true;
  }
}
