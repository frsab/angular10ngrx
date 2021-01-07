import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export function addProductReducer(state: Product[] = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
        return [...state, action.payload];
    default:
        return state;
    }
}