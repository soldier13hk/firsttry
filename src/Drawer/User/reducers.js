import {
    GROUP_UPDATE,
    GROUP_CREATE,
    GROUP_SAVE_SUCCESS,
    GROUP_SAVE_FAIL,
    GROUP_NAME_CHANGED,
    GROUP_CHECK
} from './types';


const INITIAL_STATE = {
    grouptext: '',
    familygroup: 'none',
    ingroup: false,

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GROUP_NAME_CHANGED:
            console.log('home,reducer:namechanged:'+action.payload);
            return { ...state, grouptext: action.payload };
        case GROUP_CHECK:
            return INITIAL_STATE;
        case GROUP_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case GROUP_CREATE:
            return INITIAL_STATE;
        case GROUP_SAVE_SUCCESS:
            return INITIAL_STATE;
        case GROUP_SAVE_FAIL:
            return INITIAL_STATE;
        default:
            return state;
    }
};