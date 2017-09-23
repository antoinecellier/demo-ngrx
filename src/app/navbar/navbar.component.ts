import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {

  @Output() refreshSeries = new EventEmitter()
  @Input() search: String = ""

  searchForm = new FormGroup ({
    search: new FormControl()
  })

  constructor() { }

  ngOnInit() {
    this.searchForm.valueChanges
      .debounceTime(500) 
      .distinctUntilChanged((a, b) => a.search === b.search.trim())
      .subscribe((value)=>{
        this.refreshSeries.emit(value.search)
      })
  }

}
