import { Component, OnInit } from '@angular/core';

import { TVService } from './tv.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public series

  constructor(private tvService: TVService){}

  ngOnInit() {
    // TODO : Assign series with observable
    this.series = this.tvService.getTVs()

    // TODO : Update what series must listen
    this.tvService.loadSeries()
  }

  filterSeries(search?) {
    // TODO : Remove series assignement

    // TODO : Update what series must listen
    this.tvService.loadSeries(search)
  }
}
