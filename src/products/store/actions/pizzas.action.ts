import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[Products] LOAD_PIZZAS';
export const LOAD_PIZZAS_FAIL = '[Products] LOAD_PIZZAS_FAIL';
export const LOAD_PIZZAS_SUCCESS = '[Products] LOAD_PIZZAS_SUCCESS';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: Pizza[]) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: any) {}
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasSuccess | LoadPizzasFail;
