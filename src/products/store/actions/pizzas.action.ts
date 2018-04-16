import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[Products] LOAD_PIZZAS';
export const LOAD_PIZZAS_FAIL = '[Products] LOAD_PIZZAS_FAIL';
export const LOAD_PIZZAS_SUCCESS = '[Products] LOAD_PIZZAS_SUCCESS';
export const SELECT_PIZZA = '[Products] SELECT_PIZZA';

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

export class SelectPizza implements Action {
  readonly type = SELECT_PIZZA;
  constructor(public payload: Pizza) {}
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasSuccess | LoadPizzasFail | SelectPizza;
