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
    this.series = this.tvService.getTVs() //get "store"
    this.tvService.loadTvs() // dispatch action
  }

  filterSeries(search?) {
    this.tvService.loadTvs(search) // dispatch action
  }
}
