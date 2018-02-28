import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log('reducer:emailchanged:'+action.payload);
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            console.log('reducer:pwchanged:'+action.payload);
            return { ...state, password: action.payload };

        case LOGIN_USER:
            console.log('reducer:loginuser:'+action.payload);
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            console.log('reducer:loginsuccess:'+action.payload);
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            console.log('reducer:loginfail:'+action.payload);
            return { ...state, error: 'Auth Failed.', password: '', loading: false };
        default:
            return state;
    }
};
