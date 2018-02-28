import { combineReducers } from 'redux';
import {currentUser} from "../Drawer/reducer";
import TodoFormReducer from '../Todo/reducers/TodoFormReducer';
import TodoReducer from '../Todo/reducers/TodoReducer';
import AuthReducer from '../Drawer/Login/reducers'

export default combineReducers({

    auth : AuthReducer,
    todoForm: TodoFormReducer,
    todoList: TodoReducer
});
