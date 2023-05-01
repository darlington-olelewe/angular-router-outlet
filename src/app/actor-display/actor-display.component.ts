import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-actor-display',
  templateUrl: './actor-display.component.html',
  styleUrls: [ ]
})
export class ActorDisplayComponent  {
  @Input() actor;
  @Input() index;

  ngOnInit() {
    console.log(this.actor)
  }

  logActor(actor) {
    console.log(this.actor)
  }

}