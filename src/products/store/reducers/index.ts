import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';

// feature state
export interface ProductsState {}

// reducers
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

// 'products' komt overeen met de naam die we hebben gebruikt in StoreModule.forFeature()
export const getProductsState = createFeatureSelector<ProductsState>('products');
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);
export const getPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
