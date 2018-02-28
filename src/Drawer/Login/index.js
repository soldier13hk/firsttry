import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../Themes/colors';
import { getNavigationOptions } from '../utils/navigation';
import { emailChanged, passwordChanged, loginUser } from './actions';
import { Card, CardSection, Input, Button, Spinner } from '../../constants/commonUI';
import * as reducer from '../reducer';
import { connect } from 'react-redux';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    login() {
        const { updateCurrentUser } = this.props;
        updateCurrentUser({ name: 'carol '});
        console.log('login');
    }
    onEmailChange(text) {
        //text = this.props.email;
        this.props.emailChanged(text);
        console.log('props.email:'+this.props.email);
    }

    onPasswordChange(text) {
        //text = this.props.password;
        this.props.passwordChanged(text);
        console.log('props.email:'+this.props);
    }

    onButtonPress() {
        const email = this.props.email;
        const password = this.props.password;
        //console.log(typeof email);
        //console.log(typeof password);
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

LoginScreen.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,

};
LoginScreen.defaultProps = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
};
const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btnSubmit: {
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row',
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
});

LoginScreen.navigationOptions = ({ navigation }) => getNavigationOptions('Login', Colors.primary, 'white');
//
// const mapStateToProps = store => ({
//     currentUser: store.currentUser,
// });
//
// const mapDispatchToProps = {
//     updateCurrentUser: reducer.updateCurrentUser,
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
const mapStateToProps = ({auth}) => {
     // console.log(store);
     const { email, password, error, loading } = auth;
     console.log('auth: '+ auth.user+' '+auth.email);
     // + 'email, password, error, loading:'+,email+password+error+loading
     return { email, password, error, loading };
    // email = store.email;
    // password = store.password;
    // loading = store.loading;
    // error = store.error;



};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginScreen);