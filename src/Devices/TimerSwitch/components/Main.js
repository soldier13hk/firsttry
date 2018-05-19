import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View,Modal,ScrollView  } from 'react-native';
import * as Colors from '../../Themes/colors';
import {Button,CardSection} from '../../../constants/commonUI';
import {Actions} from "react-native-router-flux/index";
//let CurrentMode = '';
import {IP} from '../../../constants/serverIP';
import Base64 from 'Base64';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          showModal: false,
          isDateTimePickerVisible: false,
        }
    }
    componentDidMount(){
      console.log('timer,main,component: reach');
        //https://facebook.github.io/react-native/movies.json
        return fetch('http://'+IP+'/dataOfSwitches',
        { method: 'GET',
        headers: { 'Content-Type': 'application/json',
        "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456')}  })
          .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,

                }, function(){
                  if(this.state.dataSource.modechoose ){
                    if(this.state.dataSource.modechoose[0]==1){
                      this.setState({currentMode: 'Auto'});
                    }else if (this.state.dataSource.modechoose[1]==1) {
                      this.setState({currentMode: 'Manual Choose'});
                    }else if (this.state.dataSource.modechoose[2]==1) {
                      this.setState({currentMode: 'Timing Function'});
                    }
                    this.state.dataSource.modechoose.map(function(val,key){
                      console.log(key+' : '+val);
                    })
                  }
                });

            })
            .catch((error) =>{
                console.error(error);
            });


    }
    UpdateThisMode(){
      console.log('UpdateThisMode');
      if(this.state.dataSource.modechoose ){
        if(this.state.dataSource.modechoose[0]==1){
          this.setState({currentMode: 'Auto'});
        }else if (this.state.dataSource.modechoose[1]==1) {
          this.setState({currentMode: 'Manual Choose'});
        }else if (this.state.dataSource.modechoose[2]==1) {
          this.setState({currentMode: 'Timing Function'});
        }
        this.state.dataSource.modechoose.map(function(val,key){
          console.log(key+' : '+val);
        })
      }
    }
    ChangeMode(value){

      console.log('wtf:'+value);
      switch(value){
        case 0:
            this.AutoMode();
            break;
        case 1:
            break;
        case 2:
            break;
      }

    }
    AutoMode(){
      this.setState({currentMode: 'Auto'});
      fetch('http://'+IP+'/ModeName', {
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456'),
          },
          body: JSON.stringify({
            ModeChoose: 0,

          })
      });

    }
    ManualMode(){
      this.setState({currentMode: 'Manual Choose'});
      this.setState({showModal: true});
      fetch('http://'+IP+'/ModeName', {
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456'),
          },
          body: JSON.stringify({
            ModeChoose: 1,

          })
      });

    }
    TimingMode(){
      this.setState({currentMode: 'Timing Function'});
      fetch('http://'+IP+'/ModeName', {
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456'),
          },
          body: JSON.stringify({
            ModeChoose: 2,

          })
      });

    }
    SetTiming(){
      Actions.timerlist();
    }
    CurrentModePick(){
      if(this.state.dataSource.modechoose){
        if(this.state.dataSource.modechoose[0]==1){
          return 'Auto';
        }else if (this.state.dataSource.modechoose[1]==1) {
          return 'Manual';
        }else if (this.state.dataSource.modechoose[2]==1) {
          return 'Timing Function';
        }
      }

    }
    _ManualOn(){
      fetch('http://'+IP+'/ManualChoose', {
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456'),
          },
          body: JSON.stringify({
            MannualChooses: 1,

          })
      });
      this.setState({ showModal: false, });
    }
    _ManualOff(){

      fetch('http://'+IP+'/ManualChoose', {
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456'),
          },
          body: JSON.stringify({
            MannualChooses: 0,

          })
      });
      this.setState({ showModal: false, });
    }
    _ManualCancel(){
      this.setState({ showModal: false, });
    }

    render() {
        if(this.state.isLoading){
              return(
                  <View style={{flex: 1, justifyContent: "center"}}>
                      <ActivityIndicator/>
                      <View style={styles.container}>
                          <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Timer Switch Screen</Text>
                      </View>
                  </View>
              )
        }else{
          this.CurrentModePick();
          return(
            <ScrollView style={{paddingVertical:50}}>
              <CardSection style={styles.cardSectionStyle}>
                <Text>Current Mode: {this.state.currentMode} </Text>

              </CardSection>
              <CardSection>
                  <Button onPress={this.AutoMode.bind(this)}>Auto Mode</Button>
              </CardSection>
              <CardSection>
                  <Button onPress={this.ManualMode.bind(this)}>Manual Control Mode</Button>
              </CardSection>
              <CardSection>
                  <Button onPress={this.TimingMode.bind(this)}>Timing Function Mode</Button>
              </CardSection>
              <CardSection>
                  <Button onPress={()=>{this.SetTiming()}}>Set Timing Function</Button>
              </CardSection>
              <Modal
                visible={this.state.showModal}
                transparent
                animationType="slide"
                onRequestClose={() => {}}
              >
                <View style={styles.containerStyle}>
                  <CardSection style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>
                      Press the button to turn on or off the light.
                    </Text>
                  </CardSection>

                  <CardSection>
                    <Button onPress={this._ManualOn.bind(this)}>On</Button>
                    <Button onPress={this._ManualOff.bind(this)}>Off</Button>
                    <Button onPress={this._ManualCancel.bind(this)}>Cancel</Button>
                  </CardSection>
                </View>
              </Modal>
            </ScrollView>

          );
        }


    }
}

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
})

export default Main;
