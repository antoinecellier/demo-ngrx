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
    this.series = this.statefulService.getTVs() //get "store"
    // TODO : Get search from the store

    this.castings = this.statefulService.getCastings() //get "store"

    // TODO : Dispach action GET_SYNC_SERIE
    this.tvService.loadTvs() // dispatch action
  }  

  filterSeries(search?) {
    // TODO : Dispach action UPDATE_SYNC_SEARCH
    this.tvService.loadTvs(search)
  }
}
