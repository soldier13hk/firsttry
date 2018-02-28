import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';

export const emailChanged = (text) => {
    console.log('actions.emailchange:'+text);
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    console.log('actions.pwchange:'+text);
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password} ) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        console.log(email+' '+password);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .then(console.log(user))
                    .catch(() => loginUserFail(dispatch));
            });
    console.log('loginUser: '+email+password);
    };
};

export const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

export const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};
