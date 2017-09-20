import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class TVService {

  constructor(private http: Http,
              @Inject('apiKey') private apiKey: string) { }

  getTVs(search?) {
    const request = (search?) => this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`)
                                         .map(response => response.json())
                                         .map(json => json.results.splice(0, 10))
    return Observable.if(
      () => search,
      request(search).map(series => series.filter((serie: any) => serie.original_name.includes(search))),
      request(search)
    )
                    
  }

}
