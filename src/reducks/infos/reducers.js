import * as Actions from './actions';

const initialState = {
    postion: [],
    visible: [],
    count: 0
};

export const InfosReduer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CREAET_NEW_ELEMENT:
            return {
                ...state,
                count: action.payload
            };
        default:
            return state;
    }
};
