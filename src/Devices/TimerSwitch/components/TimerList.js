import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View,Modal,ListView,ScrollView, TouchableOpacity  } from 'react-native';
import * as Colors from '../../Themes/colors';
import {Button,CardSection,Card} from '../../../constants/commonUI';
import {Actions} from "react-native-router-flux/index";
let CurrentMode = 'Auto';
let datechanged = '';
let changeoradd = '';
import {IP} from '../../../constants/serverIP';
import Base64 from 'Base64';
class Main extends Component {
  constructor(props){
      super(props);
      this.state ={
        isLoading: true,
        showModal: false
      }
      this.onRowPress = this.onRowPress.bind(this);
  }
  componentDidMount(){
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

              });

          })
          .catch((error) =>{
              console.error(error);
          });

  }
  renderRow(){
    (timer)=> <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>
            {timer}
          </Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>;
  }
  onRowPress(key){
    console.log('Timerlist: onPress '+key);
    Actions.timeredit();
  }
  onOKButtonPress(){
    if(changeoradd==0){
      fetch('https://mywebsite.com/endpoint/', {
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            newtimedata: datechanged,

          })
      });
    }else if(changeoradd==1){
      fetch('https://mywebsite.com/endpoint/', {
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timeadded: datechanged,

          })
      });
    }

    this.setState({ showModal: false });
  }
  onCancelButtonPress(){
    this.setState({ showModal: false });
  }
  onNewTimerButtonPress(){
    changeoradd=1;
    this.setState({ showModal: true });
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    datechanged=date;
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };
  onPress(){
    console.log('onpress');
    return <Text>ABC</Text> ;
  }
  // showList(){
  //   console.log('here');
  //   return(
  //     this.state.dataSource.timedata.map(function(val,key){
  //
  //         console.log('timer: '+key+' , '+val[0] +', '+ val[1]+' '+ typeof val);
  //         return(
  //         <View key={key} style={{flexDirection:'row'}}>
  //           <CardSection style={styles.cardSectionStyle}>
  //             <TouchableOpacity
  //               style={styles.button}
  //               onPress={() => this.onRowPress(key)}>
  //               <Text> Switch on at {val[0]} to {val[1]}  </Text>
  //             </TouchableOpacity>
  //           </CardSection>
  //         </View>
  //       );
  //     })
  //   )
  // }
  render() {
      if(this.state.isLoading){
          return(
              <View style={{flex: 1, padding: 20}}>
                  <ActivityIndicator/>
                  <View style={styles.container}>
                      <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Timer Switch Screen</Text>
                  </View>
              </View>
          )
      }else {
        console.log('datasource');
        return(
          <ScrollView style={{paddingVertical:50}}>
            <View >
            {this.state.dataSource.timedata.map(function(val,key){
              console.log('timer: '+key+' , '+val[0] +', '+ val[1]+' '+ typeof val);
                return(
                <View key={key} style={{flexDirection:'row'}}>
                  <CardSection style={styles.cardSectionStyle}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={function(){this.onRowPress(key)}.bind(this)}>
                      <Text> Switch on at {val[0]} to {val[1]}  </Text>
                    </TouchableOpacity>
                  </CardSection>
                </View>
              );
            },this)}
            </View>
            <Modal
              visible={this.state.showModal}
              transparent
              animationType="slide"
              onRequestClose={() => {}}
            >
              <View style={styles.containerStyle}>
                <CardSection style={styles.cardSectionStyle}>
                  <Text style={styles.textStyle}>
                    Change the light turn on time.
                  </Text>
                </CardSection>

                <CardSection>
                  <Button onPress={this._showDateTimePicker()}>Change Time</Button>
                </CardSection>
                <CardSection>
                  <Button onPress={this.onOKButtonPress()}>Save</Button>
                  <Button onPress={this.onCancelButtonPress()}>Cancel</Button>
                </CardSection>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible()}
                  onConfirm={this._handleDatePicked()}
                  onCancel={this._hideDateTimePicker()}
                />
              </View>
            </Modal>
          </ScrollView>
          // <Card>
          // <ListView
          //     enableEmptySections
          //     dataSource={this.state.dataSource()}
          //     renderRow={this.renderRow()}
          // />
          // <CardSection>
          //     <Button onPress={this.onNewTimerButtonPress()}>New Timer</Button>
          // </CardSection>
          // <Modal
          //   visible={this.state.showModal()}
          //   transparent
          //   animationType="slide"
          //   onRequestClose={() => {}}
          // >
          //   <View style={containerStyle}>
          //     <CardSection style={cardSectionStyle}>
          //       <Text style={textStyle}>
          //         Change the light turn on time.
          //       </Text>
          //     </CardSection>
          //
          //     <CardSection>
          //       <Button onPress={this._showDateTimePicker()}>Change Time</Button>
          //     </CardSection>
          //     <CardSection>
          //       <Button onPress={this.onOKButtonPress()}>Save</Button>
          //       <Button onPress={this.onCancelButtonPress()}>Cancel</Button>
          //     </CardSection>
          //     <DateTimePicker
          //       isVisible={this.state.isDateTimePickerVisible()}
          //       onConfirm={this._handleDatePicked()}
          //       onCancel={this._hideDateTimePicker()}
          //     />
          //   </View>
          // </Modal>
          // </Card>
        );
      }

  }
}

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
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
  },
  timerStyle: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
})

export default Main;
