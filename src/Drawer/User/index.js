import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import * as Colors from '../Themes/colors';
import {Button,CardSection} from '../../constants/commonUI';
import * as reducer from '../reducer';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {emailChanged, loginUser, loginUserSuccess, passwordChanged, signOutUser} from "../Login/actions";

class UserScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    logout() {
        console.log('LOGOUT!');
        this.props.signOutUser();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>User Screen</Text>
                <CardSection>
                    <Button onPress={() => this.logout()}>Logout</Button>
                </CardSection>
            </View>
        );
        // return (
        //     <View style={styles.container}>
        //         <View style={[styles.input, { borderColor: Colors.primary }]}>
        //             <TouchableOpacity style={styles.btnSubmit} onPress={() => this.logout()}>
        //                 <Text style={{ textAlign: 'center', color: Colors.primary }}>Logout</Text>
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // );
    }
}

const styles = StyleSheet.create({
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

const mapStateToProps = ({auth}) => {
    const { user } = auth;
    return { user };
};

// const mapDispatchToProps = {
//     updateCurrentUser: reducer.updateCurrentUser,
// };
export default connect(mapStateToProps, {
    signOutUser,
})(UserScreen);
//export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
