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

  ngOnInit() { }

  filterSeries(search?) { }
}
