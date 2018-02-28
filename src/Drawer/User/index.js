import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import * as Colors from '../Themes/colors';
import * as reducer from '../reducer';
import { connect } from 'react-redux';

class UserScreen extends Component {
    logout() {
        const { updateCurrentUser } = this.props;
        updateCurrentUser({});
        console.log('logout');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.input, { borderColor: Colors.primary }]}>
                    <TouchableOpacity style={styles.btnSubmit} onPress={() => this.logout()}>
                        <Text style={{ textAlign: 'center', color: Colors.primary }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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

const mapStateToProps = store => ({
    currentUser: store.currentUser,
});

const mapDispatchToProps = {
    updateCurrentUser: reducer.updateCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
