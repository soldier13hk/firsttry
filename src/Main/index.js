import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Drawer/Login';
import Drawer from '../Drawer';
import firebase from 'firebase';
import { loginUserSuccess,loginUserAuto } from '../Drawer/Login/actions'
import * as Colors from "../Drawer/Themes/colors";
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const createStackNavigator = (user) => StackNavigator({
    LoginScreen: { screen: LoginScreen },
    Drawer: { screen: Drawer },
}, {
    initialRouteName: user ?  'Drawer' : 'LoginScreen',
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentWillMount(){
        this.props.loginUserAuto();
        if(firebase.auth().currentUser!=null){
            console.log('main,willmount,current user: '+firebase.auth().currentUser.email);
        }
        console.log('main,loginauto: '+this.props.user);
    }
    render() {
        let userstatus = false;

        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                userstatus = true;
            }else{
                userstatus = false;
            }

        });
        const user = this.props.user;
        //const user = firebase.auth().currentUser.uid;
        if(firebase.auth().currentUser!=null){
            console.log('main,render,current user: '+firebase.auth().currentUser.email+' user: '+user);
        }
        //console.log('status: '+userstatus+'user: '+user);
        const Navigator = createStackNavigator(user);
        return (
            <Navigator />

        );
    }
}

// Main.propTypes = {
//     user: PropTypes.object.isRequired,
// };

// const mapStateToProps = store => ({
//     user: store.user,
// });

//
const mapStateToProps = ({auth}) => {
    // console.log(store);
    const { user } = auth;
    //console.log('auth: '+ {auth}+' '+user);
    // + 'email, password, error, loading:'+,email+password+error+loading
    return { user };
    // email = store.email;
    // password = store.password;
    // loading = store.loading;
    // error = store.error;
};
//
export default connect(mapStateToProps,{loginUserSuccess,loginUserAuto})(Main);
