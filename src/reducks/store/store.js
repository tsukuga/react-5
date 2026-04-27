import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { InfosReduer } from '../infos/reducers';

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            infos: InfosReduer,
        }),
        applyMiddleware(thunk)
    );
}
