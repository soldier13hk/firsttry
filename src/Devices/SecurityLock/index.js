import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    WebView,
    ActivityIndicator,
} from 'react-native';
import * as Colors from '../Themes/colors';
import {Button,CardSection} from '../../constants/commonUI';
import {CameraIP} from '../../constants/serverIP';
import {IP} from '../../constants/serverIP';
import Base64 from 'Base64';
let link="http://user:"+"123456@"+CameraIP+"/stream";

class LockScreen extends Component {
  constructor(props){
      super(props);
      this.state ={
        isLoading: true,

      }

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
                  dataSource: responseJson,
                  isLoading: false,
              }, function(){

              });

          })
          .catch((error) =>{
              console.error(error);
          });

  }
    formatHtml () {
        console.log("link2: "+link);
        return ('<html><body><img src="' + link + '" width="100%" style="background-color: white; min-height: 100%; min-width: 100%; position: fixed; top: 0; left: 0;"></body></html>');
    }
    _OpenDoor(){
      fetch('http://'+IP+'/unlock', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456'),
        },
          body: JSON.stringify({


          })
      });
      fetch('http://'+IP+'/dataOfSwitches',
      { method: 'GET',
      headers: { 'Content-Type': 'application/json',
      "Authorization": 'Basic '+Base64.btoa('user' + ":" + '123456')}  })
        .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  dataSource: responseJson,
                  isLoading: false,
              }, function(){

              });

          })
          .catch((error) =>{
              console.error(error);
          });
    }
    render() {

        console.log("link: "+link);
//        return(
//            <View style={styles.container}>
//                <Image
//                    style={////{width: 240, height: 100}}
//                    source={//{uri: link}}
//                />
//            </View>//
//        );
//        return (
//      <View>
//       <WebView
//          style={styles.backgroundVideo}
//          automaticallyAdjustContentInsets={true}
//          scalesPageToFit={true}
//          startInLoadingState={false}
//          contentInset={{top: 0, right: 0, left: 0, bottom: 0}}
 //         scrollEnabled={false}
  //        source={{html: this.formatHtml(), baseUrl: '/'}} />
    //  </View>
      //  );
      if(this.state.isLoading){
          return(
              <View style={{flex: 1, padding: 20}}>
                  <ActivityIndicator/>
                  <View style={styles.container}>
                      <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Timer Switch Screen</Text>
                  </View>
              </View>
          )
      }else if(this.state.dataSource) {
        return(
          <View>
          <CardSection>
            <Text>{this.state.dataSource.lock ? 'Unlocked' : 'Locked'}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={this._OpenDoor.bind(this)}> {this.state.dataSource.lock ? 'Lock' : 'Unlock'} The Door</Button>
          </CardSection>

          </View>

      );
    }
    }
}
// <WebView
//     style={styles.backgroundVideo}
//     source={{uri: link}}
//    // source={{uri:"https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0"}}
//
// />
const styles = StyleSheet.create({
  backgroundVideo: {
    width:300,
    height:125
  }
})

export default LockScreen;
