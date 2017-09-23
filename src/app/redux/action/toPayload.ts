import { Action } from '@ngrx/store'

export default function (action: Action): any {
  return (action as any).payload
}