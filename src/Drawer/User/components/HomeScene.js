import React, { Component } from 'react';
import {todoFetch} from "../../../Todo/actions";
import connect from 'react-redux';
import {CardSection,Card,Spinner,Button} from "../../../constants/commonUI";
import { Actions } from 'react-native-router-flux';
import {NetworkInfo} from "react-native-network-info";

class HomeScene extends Component{
    constructor(props) {
        super(props);
        this.state = {};

    }

    renderSignInGroupButton() {
        return (
            <Button onPress={Actions.groupSignIn()}>
                Sign In an existing Family Group
            </Button>
        );
    }
    renderCreateGroupButton(){
        return (
            <Button onPress={Actions.groupCreate()}>
                Create a Family Group
            </Button>
        );
    }
    //console.log
    render() {
        let IPv4 = '';
        let IP = '';
        let SSID = '';
        let BSSID = '';
        NetworkInfo.getIPV4Address(
            ipv4 => {console.log('ipv4: '+ipv4);}
        );
        NetworkInfo.getIPAddress(
            ip => {console.log('ip: '+ip);}
        );
        NetworkInfo.getSSID(
            ssid => {console.log('ssid: '+ssid);}
        );
        NetworkInfo.getBSSID(
            ssid => {console.log('bssid: '+ssid);}
        );
        return (
            <Card>
                <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Current Family Group: {this.props.familygroup}</Text>
                <CardSection>
                    {this.renderSignInGroupButton()}
                </CardSection>
                <CardSection>
                    {this.renderCreateGroupButton()}
                </CardSection>

            </Card>
        );

    }
}
const mapStateToProps = (state) => {
    const { familygroup } = state.familyGroup;

    return { familygroup };
};

//export default connect(mapStateToProps)(HomeScene);
export default HomeScene;



