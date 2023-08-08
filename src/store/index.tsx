import { configureStore } from '@reduxjs/toolkit';
import cart from './modules/cart/reducer';
import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer)

export default store;