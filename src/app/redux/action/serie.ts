// counter.actions.ts
import { Action } from '@ngrx/store';

export const GET_SYNC_SERIE  = '[Serie] Get sync series'
export const GET_ASYNC_SERIE  = '[Serie] Get async series'
export const UPDATE_SYNC_SEARCH = '[Serie] Update sync search'
export const UPDATE_ASYNC_SEARCH = '[Serie] Update async search'
export const RECEIVE_SERIE      = '[Serie] Receive series'

export class UpdateSyncSearch implements Action {
    readonly type = UPDATE_SYNC_SEARCH
    constructor(public payload: String) {}
}

export class UpdateAsyncSearch implements Action {
    readonly type = UPDATE_ASYNC_SEARCH
    constructor(public payload: String) {}
}

export class GetSyncSerie implements Action {
  readonly type = GET_SYNC_SERIE;
}

export class GetAsyncSerie implements Action {
  readonly type = GET_ASYNC_SERIE;
}

export class ReceiveSerie implements Action {
  readonly type = RECEIVE_SERIE;
  constructor(public payload: any[]) {}
}

export type All
  = UpdateSyncSearch
  | UpdateAsyncSearch
  | GetSyncSerie
  | GetAsyncSerie
  | ReceiveSerie;