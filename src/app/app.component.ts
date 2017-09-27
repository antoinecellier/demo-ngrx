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
              private castingService: CastingService){}

  ngOnInit() {
    this.series = this.tvService.getTVs()
    this.castings = this.castingService.getCastings()
    this.tvService.loadTvs()
  }

  filterSeries(search?) {
    this.tvService.loadTvs(search)
  }

  loadCasting(serieId) {
    this.castingService.loadCasting(serieId)
  }
}
