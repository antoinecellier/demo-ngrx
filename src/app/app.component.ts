import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './redux/reducer/index'
import { selectSeries, selectSearch } from './redux/reducer/serie'
import * as SerieAction from './redux/action/serie'

import { TVService } from './tv.service'
import { CastingService } from './casting.service'
import { StatefulService } from './stateful.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public series
  public castings
  public search

  constructor(private tvService: TVService,
              private castingService: CastingService,
              private statefulService: StatefulService,
              private store: Store<AppState>){}

  // ####### Service stateful version ####### //

  ngOnInit() {
    // TODO : Get series from the store
    this.series = this.store.select(selectSeries)
    // TODO : Get search from the store
    this.search = this.store.select(selectSearch)

    this.castings = this.statefulService.getCastings() //get "store"

    // TODO : Dispach action GET_ASYNC_SERIE
    this.store.dispatch(new SerieAction.GetAsyncSerie())
  }  

  filterSeries(search?) {
    // TODO : Dispach action UPDATE_ASYNC_SEARCH
    this.store.dispatch(new SerieAction.UpdateAsyncSearch(search))
  }
}
