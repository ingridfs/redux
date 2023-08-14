import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { ICartState } from './modules/cart/types';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

export interface IState {
    cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    ),
    
    )

// sagaMiddleware.run([...sagas])

export default store