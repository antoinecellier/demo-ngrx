import { Component, OnInit } from '@angular/core';

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

  constructor(private tvService: TVService,
              private castingService: CastingService,
              private statefulService: StatefulService){}

  ngOnInit() {
    this.series = this.statefulService.getTVs() //get "store"
    this.castings = this.statefulService.getCastings() //get "store"
    this.tvService.loadTvs() // dispatch action
  }

  filterSeries(search?) {
    this.tvService.loadTvs(search) // dispatch action
  }

  loadCasting(serieId) {
    this.castingService.loadCasting(serieId) // dispatch action
  }
}
