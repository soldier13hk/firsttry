import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    WebView,
    ActivityIndicator,
    Video,
} from 'react-native';
import * as Colors from '../../Themes/colors';
import {CameraIP} from '../../../constants/serverIP';
let link="https://user:"+"123456@"+CameraIP+"/stream";

class Stream extends Component {
  constructor(props){
      super(props);
      this.state ={ isLoading: false}
  }
  // componentDidMount(){
  //   return fetch(link)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //
  //       this.setState({
  //         isLoading: false,
  //
  //       }, function(){
  //
  //       });
  //
  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }
  formatHtml () {
      console.log("link2: "+link);
      return ('<html><body><img src="' + link + '" width="100%" style="background-color: white; min-height: 100%; min-width: 100%; position: fixed; top: 0; left: 0;"></body></html>');
  }
  render() {
    console.log("link: "+link);
    if(this.state.isLoading){
        return(
            <View style={{flex: 1, justifyContent: "center"}}>
                <ActivityIndicator/>

            </View>
        );
    }
    else{
        console.log("link: "+link);

        return(
          <View>
        <WebView
            style={styles.backgroundVideo}
            source={{uri: link}}
            //source={{uri:"https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0"}}

          />
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    backgroundVideo: {
      width:300,
      height:125,
      flex: 1,
    },
    imageView:{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 3,
    },
    contentContainer: {
        paddingVertical: 20
    },
    thumbnail_area: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail_scroll: {
    flexDirection: 'row',
    width: 250,
    height: 150,
  },
  thumbnail_l: {
    flex: 1,
    width: 250,
    resizeMode: 'contain',
  },
  thumbnail_paging: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 250,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.0)'
  },
});

export default Stream;
