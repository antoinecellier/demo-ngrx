import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { StatefulService } from './stateful.service'

@Injectable()
export class TVService {
  
  private series = new Subject() // TODO : Remove state

  constructor(private http: Http, 
              private statefulService: StatefulService,
              @Inject('apiKey') private apiKey: string) { }

  loadTvs(search?) {
    this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`)
      .map(response => response.json())
      .map(json => json.results.splice(0, 10))
      .map(series => search ? series.filter((serie: any) => serie.original_name.toUpperCase().includes(search.toUpperCase())) : series) 
      .subscribe(results => this.series.next(results)) // TODO : use another subject
  }

  // TODO : Remove state getter
  getTVs() {
    return this.series.asObservable()
  }
}