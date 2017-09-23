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

  // ngOnInit() {
  //   this.series = this.statefulService.getTVs() //get "store"
  //   this.castings = this.statefulService.getCastings() //get "store"
  //   this.tvService.loadTvs() // dispatch action
  // }  

  // filterSeries(search?) {
  //   this.tvService.loadTvs(search)
  // }
  
  // ######################################## //

  // #### Store without effects version ##### //

  // ngOnInit() {
  //   this.series = this.store.select(selectSeries)
  //   this.search = this.store.select(selectSearch)
  //   this.castings = this.statefulService.getCastings() //get "store"
  //   this.store.dispatch(new SerieAction.GetSyncSerie())
  // }

  // filterSeries(search?) {
  //   this.store.dispatch(new SerieAction.UpdateSyncSearch(search))
  // }

  // loadCasting(serieId) {
  //   this.castingService.loadCasting(serieId) // dispatch action
  // }

  // ######################################## //

  // ###### Store with effects version ###### //

  ngOnInit() {
    this.series = this.store.select(selectSeries)
    this.search = this.store.select(selectSearch)
    this.castings = this.statefulService.getCastings()
    this.store.dispatch(new SerieAction.GetAsyncSerie())
  }

  filterSeries(search?) {
    this.store.dispatch(new SerieAction.UpdateAsyncSearch(search))
  }

  loadCasting(serieId) {
    this.castingService.loadCasting(serieId)
  }

  // ######################################## //
}
