import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View  } from 'react-native';
import * as Colors from '../Themes/colors';
import CurrentStatus from './components/CurrentStatus';
import ManualControl from './components/ManualControl';
//import TimerList from './components/TimerList';
import {IP} from '../../constants/serverIP';
import RouterComponent from './Router';
//import base64 from 'base-64';
import Base64 from 'Base64';
//import request from 'request';
//import btoa from 'btoa';
//var auth = "Basic " + new Buffer('user:123456').toString("base64");
//window.btoa = Base64.btoa;
class TimerSwitchScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    // componentDidMount(){
    //     //https://facebook.github.io/react-native/movies.json
    //     return fetch('http://'+IP+'/dataOfSwitches',
    //     { method: 'GET',
    //     headers: { 'Content-Type': 'application/json',
    //     "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456')}  })
    //       .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({
    //                 isLoading: false,
    //                 dataSource: responseJson,
    //             }, function(){
    //
    //             });
    //
    //         })
    //         .catch((error) =>{
    //             console.error(error);
    //         });
    //
    // }
    //
    // render() {
    //     if(this.state.isLoading){
    //         return(
    //             <View style={{flex: 1, padding: 20}}>
    //                 <ActivityIndicator/>
    //                 <View style={styles.container}>
    //                     <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Timer Switch Screen</Text>
    //                 </View>
    //             </View>
    //         )
    //     }
    //     return(
    //         <View style={{flex: 1, paddingTop:20}}>
    //             <FlatList
    //                 data={this.state.dataSource.timedata}
    //                 renderItem={({item}) => <Text>{item.index}, {item[0]}, {item[1]}</Text>}
    //                 keyExtractor={(item, index) => index}
    //
    //             />
    //
    //
    //             <View style={styles.container}>
    //                 <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Timer Switch Screen</Text>
    //             </View>
    //         </View>
    //     );
        // return (
        //     <View style={styles.container}>
        //         <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Timer Switch Screen</Text>
        //     </View>
        // );
    // }
    render() {
        return (
              <RouterComponent />
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
