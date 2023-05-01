import { Component } from '@angular/core';
import { FLOP_DATA, ACTORS, WATCH_LIST } from './FLOP_DATA';

@Component({
  selector: 'watch-list-view',
  template: `
  <div>
  <h4>Watch List</h4>

  <my-watch-list-item 
    *ngFor="let item of watchList; index as i; first as f; last as l"
    [item]="item"
    (delete)="deleteItem(item)"
  ></my-watch-list-item>

</div>
  
  `
})
export class WatchlistViewComponent  {
  watchList;
  constructor() {
    this.watchList = WATCH_LIST;
  }

}