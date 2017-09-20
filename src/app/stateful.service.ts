import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class StatefulService {
  public castings = new BehaviorSubject(new Map())
  public series = new Subject()

  getCastings() {
    return this.castings.asObservable()
  }

  getTVs(search?) {
    return this.series.asObservable()
  }

}