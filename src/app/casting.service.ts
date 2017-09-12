import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class CastingService {
  public castings = new BehaviorSubject(new Map())

  private key = '8f364df072fe490fc11e59d3312a7e73'
  constructor(private http: Http) { }

  loadCasting(serie?) {
    let castingsResult = this.castings.getValue()
    if(!castingsResult.get(serie)) {
      this.http.get(`https://api.themoviedb.org/3/tv/${serie}/credits?api_key=${this.key}`)
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