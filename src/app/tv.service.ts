import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class TVService {

  constructor(private http: Http,
              @Inject('apiKey') private apiKey: string) { }

  getTVs(search?) {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`)
                    .map(response => response.json())
                    .map(json => json.results.splice(0, 10))
                    .map(series => search ? series.filter((serie: any) => serie.original_name.includes(search)) : series)
  }

}
