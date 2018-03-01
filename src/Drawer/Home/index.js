import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import * as Colors from '../Themes/colors';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>User Screen</Text>
            </View>
        );
        // return (
        //     <Router sceneStyle={{ paddingTop: 65 }}>
        //         <Scene key="auth">
        //             <Scene key="login" component={LoginForm} title="Please Login" />
        //         </Scene>
        //     </Router>
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
});

export default HomeScreen;
