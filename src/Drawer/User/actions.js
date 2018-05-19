import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    GROUP_UPDATE,
    GROUP_CREATE,
    GROUP_SAVE_SUCCESS,
    GROUP_SAVE_FAIL,
    GROUP_NAME_CHANGED,
    GROUP_CHECK
} from './types';
import {loginUserFail, loginUserSuccess} from "../Login/actions";
import {LOGIN_USER} from "../Login/types";
import {NetworkInfo} from 'react-native-network-info';


export const groupNameChanged = (text) => {
    console.log('home,actions.groupNameChange:'+text);
    return {
        type: GROUP_NAME_CHANGED,
        payload: text
    };
};

export const groupUpdate = ({ prop, value }) => {
    return {
        type: GROUP_UPDATE,
        payload: { prop, value }
    };
};

export const groupCheck = ({ grouptext }) => {
    let SSID = '';
    NetworkInfo.getSSID(
        ssid => {SSID = ssid;}
    );
    return (dispatch) => {
        //dispatch({ type: LOGIN_USER , payload });
        console.log('groupcheck: '+grouptext);
        firebase.database.ref(`familyGroup`).once('value',snapshot=>{
            const existedName = snapshot.val();
            if (existedName){
                if(existedName === grouptext){
                    Alert.alert('Alert Title','The Fa',[]);
                }
            }
        });

        dispatch({ type: LOGIN_USER  });

    };
};

export const groupCreate = ({ todoitem, isdone }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/todos`)
            .push({ todoitem, isdone })
            .then(() => {
                dispatch({ type: TODO_CREATE });
                Actions.todoList({ type: 'reset' });
            });
    };
};

export const todoFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/todos`)
            .on('value', snapshot => {
                dispatch({ type: TODO_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const groupSaveSuccess = ({ todoitem, isdone, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
            .set({ todoitem, isdone })
            .then(() => {
                dispatch({ type: TODO_SAVE_SUCCESS });
                Actions.todoList({ type: 'reset' });
            });
    };
};

export const groupSaveFail = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/todos/${uid}`)
            .remove()
            .then(() => {
                Actions.todoList({ type: 'reset' });
            });
    };
};
