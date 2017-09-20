import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { StatefulService } from './stateful.service'

@Injectable()
export class CastingService {

  constructor(private http: Http, 
              private statefulService: StatefulService,
              @Inject('apiKey') private apiKey: string) { }

  loadCasting(serie?) {
    let castingsResult = this.statefulService.castings.getValue()

    if(!castingsResult.get(serie)) {
      this.http.get(`https://api.themoviedb.org/3/tv/${serie}/credits?api_key=${this.apiKey}`)
        .map(response => response.json())
        .subscribe(result => {
          castingsResult = new Map(castingsResult)
          castingsResult.set(serie, result.cast)
          this.statefulService.castings.next(castingsResult)
        })  
    }
  }
}