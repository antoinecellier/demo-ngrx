import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class TVService {
  public series = new Subject()

  private key = ''
  constructor(private http: Http) { }

  loadTvs(search?) {
    this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.key}`)
      .map(response => response.json())
      .map(json => json.results.splice(0, 10))
      .map(series => search ? series.filter((serie: any) => serie.original_name.includes(search)) : series) 
      .subscribe(results => this.series.next(results))
  }

  getTVs(search?) {
    return this.series.asObservable()
  }

}
