import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'bc-book-search',
  template: `
    <md-card>
      <md-card-title>Find a Book</md-card-title>
      <md-card-content>
        <md-input placeholder="Search for a book" [value]="query" (keyup)="search.emit($event.target.value)"></md-input>
        <md-spinner [class.show]="searching"></md-spinner>
      </md-card-content>
    </md-card>
  `,
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {
  @Input() query: string = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
}
