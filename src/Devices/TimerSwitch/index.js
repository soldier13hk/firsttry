import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import * as Colors from '../Themes/colors';
import CurrentStatus from './components/CurrentStatus';
import ManualControl from './components/ManualControl';
import TimerList from './components/TimerList';

class TimerSwitchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Timer Switch Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default TimerSwitchScreen;
