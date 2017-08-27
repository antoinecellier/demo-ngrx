import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class TVService {

  private key = ''
  constructor(private http: Http) { }

  getTVs(search?) {
    const request = (search?) => this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.key}`)
                                         .map(response => response.json())
                                         .map(json => json.results.splice(0, 10))
    return Observable.if(
      () => search,
      request(search).map(series => series.filter((serie: any) => serie.original_name.includes(search))),
      request(search)
    )
                    
  }

}
