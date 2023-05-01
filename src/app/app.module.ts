import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { ActorDisplayComponent } from './actor-display/actor-display.component';
import { WatchListItemComponent } from './watch-list-item/watch-list-item.component';
import { ActorViewComponent } from './actor-view.component';
import { WatchlistViewComponent } from './watch-list-view.component';

let routes = [
  { path: 'actors', component: ActorViewComponent},
  { path: 'watchlist', component: WatchlistViewComponent},
]

@NgModule({
  imports: [ 
      BrowserModule, 
      FormsModule, 
      HttpClientModule, 
      RouterModule.forRoot(routes)
  ],
  declarations: [ 
    AppComponent, 
    ActorDisplayComponent, 
    WatchListItemComponent,
    ActorViewComponent, 
    WatchlistViewComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
