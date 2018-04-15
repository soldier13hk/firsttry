import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    Image
} from 'react-native';
import * as Colors from '../Themes/colors';
import {IP} from '../../constants/serverIP';
import Base64 from 'Base64';
import RouterComponent from './Router';
//import 'base-64' as {base64};

class CameraScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    // componentDidMount(){
    //     //https://facebook.github.io/react-native/movies.json
    //     return fetch('http://'+IP+'/imagelists',
    //     { method: 'GET',
    //     headers: { 'Content-Type': 'application/json',
    //     'Authorization':  'Basic '+Base64.btoa('user' + ':' + '123456')}  })
    //     .then((response) => response.json())
    //         .then((responseJson) => {
    //
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

    render() {
        // if(this.state.dataSource.images){
        //     console.log('SecurityCamera/index: '+this.state.dataSource.images);
        // }

        // if(this.state.isLoading==false){
        //     return(
        //         <View style={{flex: 1, padding: 20}}>
        //             <ActivityIndicator/>
        //             <View style={styles.container}>
        //                 <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Timer Switch Screen</Text>
        //             </View>
        //         </View>
        //     );
        // }
        // else{
            //console.log('btoa: '+Base64.btoa('https://facebook.github.io/react-native/docs/assets/favicon.png'));
            //console.log('SecurityCamera/index: '+ this.state.dataSource.images);

            return(
                <RouterComponent />
                // <ScrollView >
                //   <View style={styles.imageVIew}>
                //     {this.state.dataSource.images.map(function(val,key){
                //         val1 = Base64.btoa('http://'+ IP+'/'+val);
                //         encodedData = Base64.btoa('http://'+ IP+'/'+val);
                //         val2 = Base64.btoa('https://facebook.github.io/react-native/docs/assets/favicon.png');
                //         source = 'data:image/jpeg;base64,' + val1;
                //         console.log('securityCamera/index: '+key+' , '+val+'val1: '+ val1);
                //         return <View key={key} style={{flexDirection:'row'}}>
                //             <Image
                //                 source = {{
                //                   uri: 'http://'+ IP+'/'+val,
                //                   headers: {
                //                     'Authorization':  'Basic '+Base64.btoa('user' + ':' + '123456')
                //                   },
                //                   body: 'Your Body goes here',
                //                 }}
                //                 style={{width: 240, height: 104}}
                //                 // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                //                 //source = {{uri: 'http://user:123456@'+ IP+'/'+val}}
                //                 //source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                //             />
                //
                //         </View>
                //     })}
                //   </View>
                // </ScrollView>
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

export default CameraScreen;
