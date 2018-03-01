import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import RouterComponent from './Router';
import firebase from 'firebase';
import firebaseConfig from '../constants/config'

class TodoScreen extends Component {


    render() {
        return (

              <RouterComponent />

        );
    }
}



export default TodoScreen;
