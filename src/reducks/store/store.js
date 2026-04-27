import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {InfosReduer} from '../infos/reducers';

export default function createStore(history) {
    let middleWares = [routerMiddleware(history), thunk];
    
    return reduxCreateStore(
        combineReducers({
          infos: InfosReduer,
          router: connectRouter(history), 
        }),
        applyMiddleware(
            ...middleWares
        )
    );
}
