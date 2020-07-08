import * as Actions from './actions';
import initialState from '../store/initialState';

export  const InfosReduer = (state = initialState.infos, action)  => {
    switch (action.type) {
        case Actions.CREAET_NEW_ELEMENT:
            return {
              ...state,
              count:action.payload
            };
        default:
            return state
    }
};