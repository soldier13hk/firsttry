import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    WebView,
} from 'react-native';
import * as Colors from '../Themes/colors';
import {CameraIP} from '../../constants/serverIP';
let link="http://user:"+"123456@"+CameraIP+"/stream";
class LockScreen extends Component {
    formatHtml () {
        console.log("link2: "+link);
        return ('<html><body><img src="' + link + '" width="100%" style="background-color: white; min-height: 100%; min-width: 100%; position: fixed; top: 0; left: 0;"></body></html>');
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
        return(
        <WebView
            style={styles.backgroundVideo}
            source={{uri: link}}
           // source={{uri:"https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0"}}
        
      />
      );
    }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width:300,
    height:125
  }
})

export default LockScreen;
