import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGN_OUT_USER,
    LOGIN_USER_AUTO,
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
            console.log('reducer:loginuser');
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            console.log('reducer:loginsuccess:'+typeof action.payload);
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            console.log('reducer:loginfail:'+action.payload);
            return { ...state, error: action.payload, password: '', loading: false };
        case SIGN_OUT_USER:
            console.log('reducer:signoutuser:');
            return { ...state, user: null, error: '' };
        case LOGIN_USER_AUTO:
            console.log('reducer:loginuserauto');
            return { ...state, loading:true , error: '' };
        default:
            return state;
    }
};
