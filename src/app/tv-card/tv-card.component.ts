import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { truncate } from 'lodash'

@Component({
  selector: 'tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.css']
})
export class TvCardComponent implements OnInit {
  
  @Input() serie
  @Input() casting
  @Output() loadCasting = new EventEmitter()

  constructor() {}

  ngOnInit() {}

  truncate(overview) {
    return truncate(overview, { length: 80 })
  }

  prefetchCasting(serieId) {
    this.loadCasting.emit(serieId)
  }

}
