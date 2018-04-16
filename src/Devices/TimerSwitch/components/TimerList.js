import React, { Component } from 'react';
import { RefreshControl,Alert,StyleSheet, FlatList, ActivityIndicator, Text, View,Modal,ListView,ScrollView, TouchableOpacity  } from 'react-native';
import * as Colors from '../../Themes/colors';
import {Button,CardSection,Card} from '../../../constants/commonUI';
import {Actions} from "react-native-router-flux/index";
import DateTimePicker from 'react-native-modal-datetime-picker';
let CurrentMode = 'Auto';
let datechanged = '';
let changeoradd = 0;
let firstorsecond = 0;
let currentindex = 0;
import {IP} from '../../../constants/serverIP';
import Base64 from 'Base64';
let timedata = [];
let currentslot= [];
class Main extends Component {
  constructor(props){
      super(props);
      this.state ={
        isLoading: true,
        showModal: false,
        showModal2: false,
        refreshing: false,
      }

  }
  _onRefresh() {
   this.setState({refreshing: true});
   fetch('http://'+IP+'/dataOfSwitches',
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
       }).then(() => {
     this.setState({refreshing: false});
   });
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
  onDeleteButtonPress(){

      timedata.splice(currentindex,1);
      console.log('delete: '+timedata);
      fetch('http://'+IP+'/settimeslot', {
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456'),
          },
          body: JSON.stringify({
            newtimedata: timedata,

          })
      });
      this.setState({ showModal: false });
      currentslot=[];

  }
  onOKButtonPress(){
    if(currentslot[0]&&currentslot[1]){
      timedata[currentindex][0]=currentslot[0];
      timedata[currentindex][1]=currentslot[1];
      fetch('http://'+IP+'/settimeslot', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456'),
        },
          body: JSON.stringify({
            newtimedata: timedata,

          })
      });
      this.setState({ showModal: false });
      currentslot=[];
    }else {
      Alert.alert(
         'Please input both start and end time!'
      )
    }

  }
  onCancelButtonPress(){
    this.setState({ showModal: false });
    currentslot=[];
  }
  onSavePress(){
    if(currentslot[0]&&currentslot[1]){
      fetch('http://'+IP+'/timingFunction_add', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456'),
        },
          body: JSON.stringify({
            timeadded: currentslot,

          })
      });
      this.setState({ showModal2: false });
      currentslot=[];
    }else {
      Alert.alert(
         'Please input both start and end time!'
      )
    }
  }
  onCancelPress(){
    this.setState({ showModal2: false });
    currentslot=[];


  }

  _showDateTimePicker0(){
    firstorsecond=0;
    this.setState({ isDateTimePickerVisible: true });

    console.log('showdatetimepicker0/firstorsecond: '+firstorsecond);
  }
  _showDateTimePicker1(){
    firstorsecond=1;
    this.setState({ isDateTimePickerVisible: true });

    console.log('showdatetimepicker1/firstorsecond: '+firstorsecond);
  }

  //_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _hideDateTimePicker(){
    this.setState({ isDateTimePickerVisible: false });
    console.log('currentslot: '+currentslot[0]+';'+currentslot[1]);
  }
  _handleDatePicked = (time) => {

    console.log('A date has been picked: ', time+'type: '+typeof time+' '+time.toString()+' , '+firstorsecond);
    let timeslot = (time.getHours()<10?'0':'') + time.getHours()+':'+(time.getMinutes()<10?'0':'')+ time.getMinutes();
    console.log('time: '+time.toTimeString().split(' ')[0]+'time2 '+time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})+', time3'+timeslot);
    currentslot[firstorsecond]=timeslot;

    this._hideDateTimePicker();
  };
  Press(key,val){
    console.log('onpress '+key+' : '+val);
    this.setState({ showModal: true });
    currentindex = key;
    timedata = this.state.dataSource.timedata.map((val) => val);
    timedata.map((val,key)=>console.log(key+' : '+val+', '+typeof val[0]));
    console.log('currentkey: '+key+' , '+'currentindex: '+currentindex);
    currentslot=timedata[currentindex];
    //return <Text>ABC</Text> ;
    //return;
  }
  NewTimeslot(){
    changeoradd=1;
    this.setState({ showModal2: true });

  }
  // showList(){
  //   console.log('here');
  //   this.state.dataSource.timedata.map(function(val,key){
  //
  //         console.log('timer: '+key+' , '+val[0] +', '+ val[1]+' '+ typeof val[0]);
  //         return(
  //         <View key={key} style={{flexDirection:'row'}}>
  //           <CardSection style={styles.cardSectionStyle}>
  //             <TouchableOpacity
  //               style={styles.button}
  //               onPress={function(){this.onRowPress({key})}}>
  //               <Text> Switch on at {val[0]} to {val[1]}  </Text>
  //             </TouchableOpacity>
  //           </CardSection>
  //         </View>
  //       )
  //     },this)
  // }
  // {this.state.dataSource.timedata.map(function(val,key){
  //   console.log('timer: '+key+' , '+val[0] +', '+ val[1]+' '+ typeof val);
  //     return(
  //     <View key={key} style={{flexDirection:'row'}}>
  //       <CardSection style={styles.cardSectionStyle}>
  //         <TouchableOpacity
  //           style={styles.button}
  //           onPress={()=>{this.onRowPress(key)}.bind(this)}>
  //           <Text> Switch on at {val[0]} to {val[1]}  </Text>
  //         </TouchableOpacity>
  //       </CardSection>
  //     </View>
  //   );
  // },this)}
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

          <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}

          />
        } style={{paddingVertical:200}}>
            <View style={{height:50}}>
                <Text>Secret Message</Text>
            </View>
            <View >
              {this.state.dataSource.timedata.map(function(val,key){

                    console.log('timer: '+key+' , '+val[0] +', '+ val[1]+' '+ typeof val);
                    return(
                    <View key={key} style={{flexDirection:'row'}}>
                      <CardSection style={styles.cardSectionStyle}>
                        <TouchableOpacity
                          style={styles.button}
                          onPress={function(){ this.Press(key,val) }.bind(this)}
                          >
                          <Text> Switch on at {val[0]} to {val[1]}  </Text>
                        </TouchableOpacity>
                      </CardSection>
                    </View>
                  )
                },this)
              }
            </View>
            <CardSection>
                <Button onPress={this.NewTimeslot.bind(this)}>New Timeslot</Button>
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
                    Change the light turn on time.
                  </Text>
                </CardSection>

                <CardSection>
                  <Button onPress={this._showDateTimePicker0.bind(this)}>Start Time</Button>
                  <Button onPress={this._showDateTimePicker1.bind(this)}>End Time</Button>
                </CardSection>
                <CardSection>
                  <CardSection><Text>Start Time : {currentslot[0]}</Text></CardSection>
                  <CardSection><Text>End Time : {currentslot[1]}</Text></CardSection>
                </CardSection>
                <CardSection>
                  <Button onPress={this.onDeleteButtonPress.bind(this)}>Delete</Button>
                  <Button onPress={this.onOKButtonPress.bind(this)}>Save</Button>
                  <Button onPress={this.onCancelButtonPress.bind(this)}>Cancel</Button>
                </CardSection>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this._handleDatePicked.bind(this)}
                  onCancel={this._hideDateTimePicker.bind(this)}
                  mode='time'
                />
              </View>
            </Modal>
            <Modal
              visible={this.state.showModal2}
              transparent
              animationType="slide"
              onRequestClose={() => {}}
            >
              <View style={styles.containerStyle}>
                <CardSection style={styles.cardSectionStyle}>
                  <Text style={styles.textStyle}>
                    Create New Timeslot
                  </Text>
                </CardSection>

                <CardSection>
                  <Button onPress={this._showDateTimePicker0.bind(this)}>Start Time</Button>
                  <Button onPress={this._showDateTimePicker1.bind(this)}>End Time</Button>
                </CardSection>
                <CardSection>
                  <Button onPress={this.onSavePress.bind(this)}>Save</Button>
                  <Button onPress={this.onCancelPress.bind(this)}>Cancel</Button>
                </CardSection>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this._handleDatePicked.bind(this)}
                  onCancel={this._hideDateTimePicker.bind(this)}
                  mode='time'
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
