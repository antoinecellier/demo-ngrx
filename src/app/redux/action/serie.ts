// counter.actions.ts
import { Action } from '@ngrx/store';

export const GET_SYNC_SERIE  = '[Serie] Get sync series'
export const UPDATE_SYNC_SEARCH = '[Serie] Update sync search'

export class UpdateSyncSearch implements Action {
    readonly type = UPDATE_SYNC_SEARCH
    constructor(public payload: String) {}
}

export class GetSyncSerie implements Action {
  readonly type = GET_SYNC_SERIE;
}

export type All
  = UpdateSyncSearch
  | GetSyncSerie
