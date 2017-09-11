import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class CastingService {
  public castings = new BehaviorSubject([])

  private key = '8f364df072fe490fc11e59d3312a7e73'
  constructor(private http: Http) { }

  loadCasting(serie?) {
    this.http.get(`https://api.themoviedb.org/3/tv/${serie}/credits?api_key=${this.key}`)
      .map(response => response.json())
      .subscribe(result => {
        const casting = this.castings.getValue().splice(this.castings.getValue().length, 0, result.cast)
        console.log(casting)
      })  
  }

  getCastings() {
    return this.castings.asObservable()
  }

}