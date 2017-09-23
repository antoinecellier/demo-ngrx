import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { StatefulService } from './stateful.service'

@Injectable()
export class TVService {

  constructor(private http: Http, 
              private statefulService: StatefulService,
              @Inject('apiKey') private apiKey: string) { }

  // ####### Service stateful version ####### //

  // loadTvs(search?) {
  //   this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`)
  //     .map(response => response.json())
  //     .map(json => json.results.splice(0, 10))
  //     .map(series => search ? series.filter((serie: any) => serie.original_name.toUpperCase().includes(search.toUpperCase())) : series) 
  //   .subscribe(results => this.statefulService.series.next(results))
  // }
  
  // ######################################## //

  // #### Store withtout effects version #### //

  loadTvs(search?) {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`)
      .map(response => response.json())
      .map(json => json.results.splice(0, 10))
      .map(series => search ? series.filter((serie: any) => serie.original_name.toUpperCase().includes(search.toUpperCase())) : series) 
  }

  // ######################################## //
}