import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducer';


const sagaMiddleware = createSagaMiddleware();
let middleware;

/* global __DEV__*/
if (__DEV__) {
    middleware = applyMiddleware(sagaMiddleware, createLogger());
} else {
    middleware = applyMiddleware(sagaMiddleware);
}
middleware=applyMiddleware(ReduxThunk);

export default (data = {}) => {
    const store = createStore(reducers, data, middleware);
    console.log('store: '+store);
    return store;
};
