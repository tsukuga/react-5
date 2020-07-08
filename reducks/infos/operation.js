import {createNewElementAction} from "./actions";
import {push, goBack} from 'connected-react-router'

export const copy = () => {
    return async (dispatch, getState) => {
        
        const count = getState().infos.count

        dispatch(createNewElementAction(count))
    }
};
