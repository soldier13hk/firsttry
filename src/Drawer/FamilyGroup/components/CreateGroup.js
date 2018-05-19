import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Text} from 'react-native';
import { groupNameChanged, groupCheck } from '../actions';
import { Card, CardSection, Button,Input } from '../../../constants/commonUI';
import { Actions } from 'react-native-router-flux';
import {NetworkInfo} from 'react-native-network-info'

class CreateGroup extends Component {
    onButtonPress() {
        const { grouptext } = this.props;
        this.props.groupCheck({ grouptext });
        Actions.familyGroupConfirm({ type: 'reset' });
    }
    onGroupNameChange(text) {

        this.props.groupNameChanged(text);
        console.log('props.email:'+this.props);
    }
    render() {
        let IPv4 = '';
        let IP = '';
        let SSID = '';
        let BSSID = '';
        NetworkInfo.getIPV4Address(
            ipv4 => {IPv4 = ipv4;}
        );
        NetworkInfo.getIPAddress(
            ip => {IP = ip;}
        );
        NetworkInfo.getSSID(
            ssid => {SSID = ssid;}
        );
        NetworkInfo.getBSSID(
            ssid => {BSSID = ssid;}
        );
        return (
            <Card>
                <Text style={styles.text}>
                    Your current network IP is: {IP}
                    Your current network IPv4 is: {IPv4}
                    Your current network SSID is: {SSID}
                    Your current network BSSID is: {BSSID}
                    </Text>
                <CardSection>
                    <Input
                        label="GroupName"
                        placeholder="Group Name"
                        value={this.props.grouptext}
                        onChangeText={this.onGroupNameChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { grouptext } = state.todoForm;

    return { grouptext };
};

export default connect(mapStateToProps, {
    groupNameChanged, groupCheck
})(CreateGroup);
