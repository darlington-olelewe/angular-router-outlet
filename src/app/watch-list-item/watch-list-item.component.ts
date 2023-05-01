import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styles: [ 'i {cursor:pointer}' ]
})
export class WatchListItemComponent  {
  @Input() item;
  @Output() delete = new EventEmitter();

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }


}