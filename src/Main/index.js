import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Drawer/Login';
import Drawer from '../Drawer';
import { loginUserSuccess,loginUserFail } from '../Drawer/Login/actions'

const createStackNavigator = user => StackNavigator({
    LoginScreen: { screen: LoginScreen },
    Drawer: { screen: Drawer },
}, {
    initialRouteName: isEmpty(user) ? 'LoginScreen' : 'Drawer',
});

class Main extends Component {
    render() {
        const { user } = this.props;
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

const mapStateToProps = ({auth}) => {
    // console.log(store);
    const { user } = auth;
    console.log('auth: '+ {auth}+' '+user);
    // + 'email, password, error, loading:'+,email+password+error+loading
    return { user };
    // email = store.email;
    // password = store.password;
    // loading = store.loading;
    // error = store.error;
};

export default connect(mapStateToProps,{loginUserSuccess,loginUserFail})(Main);
