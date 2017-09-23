import { Injectable } from '@angular/core' 
import { Store, Action } from '@ngrx/store' 
import { Actions, Effect, toPayload } from '@ngrx/effects' 
import { Observable } from 'rxjs/Observable' 
import { Subject } from 'rxjs/Subject' 
import * as _ from 'lodash'

import { TVService } from '../../tv.service' 
import * as SerieAction from '../../redux/action/serie'
import * as SerieReducer  from '../../redux/reducer/serie'

@Injectable() 
export class SerieEffects{ 
    constructor( 
        private updates$: Actions, 
        private tvService: TVService,
        private store: Store<SerieReducer.SerieState>
    ){} 
    
    @Effect() fetchAll$ = this.updates$
        .ofType(SerieAction.GET_ASYNC_SERIE)
        .switchMap(() => this.tvService.loadTvs())
        .map((rep: any) => new SerieAction.ReceiveSerie(rep))

    @Effect() updateSearch$ = this.updates$
        .ofType(SerieAction.UPDATE_ASYNC_SEARCH)
        .map(toPayload)
        .switchMap(search => this.tvService.loadTvs(search))
        .map((rep: any) => new SerieAction.ReceiveSerie(rep))
}