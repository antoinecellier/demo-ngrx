import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.css']
})
export class CastingComponent implements OnInit {
  @Input() casting
  @Input() display = false

  constructor() { }

  ngOnInit() {
  }

  toogleCastingDisplay() {
    this.display = !this.display
  }

}
