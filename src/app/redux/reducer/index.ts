import { serieReducer } from './serie' 

export interface AppState {
  serie
}

export const reducers : AppState = { serie: serieReducer}




