import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { StatefulService } from './stateful.service'

@Injectable()
export class TVService {
  
  private series = new Subject()

  constructor(private http: Http, 
              @Inject('apiKey') private apiKey: string) { }

  loadTvs(search?) {
    this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`)
      .map(response => response.json())
      .map(json => json.results.splice(0, 10))
      .map(series => search ? series.filter((serie: any) => serie.original_name.toUpperCase().includes(search.toUpperCase())) : series) 
      .subscribe(results => this.series.next(results))
  }

  getTVs() {
    return this.series.asObservable()
  }
}