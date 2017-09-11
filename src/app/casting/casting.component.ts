import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'casting',
  templateUrl: './casting.component.html',
  styleUrls: ['./casting.component.css']
})
export class CastingComponent implements OnInit {
  @Input() casting

  constructor() { }

  ngOnInit() {
  }

}
