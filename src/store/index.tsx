import { configureStore } from '@reduxjs/toolkit';
import cart from './modules/cart/reducer';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { ICartState } from './modules/cart/types';

export interface IState {
    cart: ICartState
}

const store = createStore(rootReducer)

export default store;