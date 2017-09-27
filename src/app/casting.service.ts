import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { StatefulService } from './stateful.service'

@Injectable()
export class CastingService {

  public castings = new BehaviorSubject(new Map())

  constructor(private http: Http, 
              @Inject('apiKey') private apiKey: string) { }

  loadCasting(serie?) {
    let castingsResult = this.castings.getValue()

    if(!castingsResult.get(serie)) {
      this.http.get(`https://api.themoviedb.org/3/tv/${serie}/credits?api_key=${this.apiKey}`)
        .map(response => response.json())
        .subscribe(result => {
          castingsResult = new Map(castingsResult)
          castingsResult.set(serie, result.cast)
          this.castings.next(castingsResult)
        })  
    }
  }

  getCastings() {
    return this.castings.asObservable()
  }
}