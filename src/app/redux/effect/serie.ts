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
    @Effect() fetchAll$ = this.updates$.ofType(SerieAction.GET_ASYNC_SERIE)
                                            .switchMap(() => this.tvService.loadTvs())
                                            .map(rep => new SerieAction.ReceiveSerie(rep))
    
    // TODO effect for update search
    @Effect() updateSearch$ = this.updates$.ofType(SerieAction.UPDATE_ASYNC_SEARCH)
                                            .map(toPayload)
                                            .switchMap((payload) => this.tvService.loadTvs(payload))
                                            .map(rep => new SerieAction.ReceiveSerie(rep))

}