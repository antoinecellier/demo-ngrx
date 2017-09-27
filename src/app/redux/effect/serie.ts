import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Actions, Effect, toPayload } from '@ngrx/effects'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { TVService } from '../../tv.service'
import * as SerieAction from '../../redux/action/serie'
import * as SerieReducer from '../../redux/reducer/serie'

@Injectable()
export class SerieEffects{
    constructor(
        private updates$: Actions,
        private tvService: TVService
    ) {}

    // TODO effect for fetch all
    
    // TODO effect for update search

}