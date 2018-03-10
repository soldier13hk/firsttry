import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGN_OUT_USER, LOGIN_USER_AUTO
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
        //dispatch({ type: LOGIN_USER , payload });
        console.log('email: '+email+' , password: '+password);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(function(){return firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {loginUserSuccess(dispatch, user);console.log('loginUser: '+user.email);})
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    loginUserFail(dispatch, errorCode);
                    console.log('error: '+errorCode+' '+errorMessage);
                    // firebase.auth().createUserWithEmailAndPassword(email, password)
                    //     .then(user => loginUserSuccess(dispatch, user))
                    //     .catch(() => loginUserFail(dispatch));
                });})
            .catch((error)=>{console.log(error)});
        dispatch({ type: LOGIN_USER  });
        // firebase.auth().signInWithEmailAndPassword(email, password)
        //     .then((user) => {loginUserSuccess(dispatch, user);console.log('loginUser: '+user);})
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         loginUserFail(dispatch, errorCode);
        //         console.log('error: '+errorCode+' '+errorMessage);
        //         // firebase.auth().createUserWithEmailAndPassword(email, password)
        //         //     .then(user => loginUserSuccess(dispatch, user))
        //         //     .catch(() => loginUserFail(dispatch));
        //     });
        // const user = firebase.auth().currentUser;
        // if(user!=null){loginUserSuccess(dispatch, user)}
    //console.log('loginUser: '+user);
    };
};

export const loginUserAuto = (user) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER_AUTO});
        loginUserSuccess(dispatch, user);
        console.log('action,loginauto')

    };
};

export const loginUserFail = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAIL ,
        payload: error
    });
};

export const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    //Actions.main();
};

// export const signOutUser = ( user) => {
//     dispatch({
//         type: SIGN_OUT_USER ,
//         payload: user
//     });
// };

export const signOutUser = () => {
    return (dispatch) => {
        //dispatch({ type: LOGIN_USER , payload });
        firebase.auth().signOut().then(function(){
            //console.log('signoutuser: '+firebase.auth.currentUser);
        }).catch(function(){
            console.log('signouterror');
        });
        console.log('actions,signoutuser: '+firebase.auth.currentUser);
        dispatch({ type: SIGN_OUT_USER });

    };
};