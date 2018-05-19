import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    ActivityIndicator,
    Image
} from 'react-native';
import * as Colors from '../../Themes/colors';
import {IP} from '../../../constants/serverIP';
import Base64 from 'Base64';
import Gallery from 'react-native-image-gallery';
//import 'base-64' as {base64};

class Images extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    componentDidMount(){
        //https://facebook.github.io/react-native/movies.json
        return fetch('http://'+IP+'/imagelists',
        { method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Authorization':  'Basic '+Base64.btoa('user' + ':' + '123456')}  })
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

    render() {
        // if(this.state.dataSource.images){
        //     console.log('SecurityCamera/index: '+this.state.dataSource.images);
        // }

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, justifyContent: "center"}}>
                    <ActivityIndicator/>

                </View>
            );
        }
        else{
            console.log('btoa: '+Base64.btoa('https://facebook.github.io/react-native/docs/assets/favicon.png'));
            console.log('SecurityCamera/index: '+ this.state.dataSource.images);
            //let obj = JSON.parse(this.state.dataSource.images);
            // let element = 'favicon.png';
            // for (var key in this.state.dataSource.images) return (
            //     <View>
            //     <Image
            //         style={{width: 100, height: 100}}
            //         //source={{url: 'http://10.89.182.20:3000/'+element}}
            //         source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            //     />
            //     </View>
            // );
            return(

                <ScrollView style={{paddingVertical:50}}>
                  <View style={styles.imageView}>
                    {this.state.dataSource.images.map(function(val,key){
                        val1 = Base64.btoa('http://'+ IP+'/'+val);
                        encodedData = Base64.btoa('http://'+ IP+'/'+val);
                        val2 = Base64.btoa('https://facebook.github.io/react-native/docs/assets/favicon.png');
                        source = 'data:image/jpeg;base64,' + val1;
                        console.log('securityCamera/index: '+key+' , '+val+'val1: '+ val1);
                        return <View key={key} >
                            <Image
                                source = {{
                                  uri: 'http://'+ IP+'/'+val,
                                  headers: {
                                    'Authorization':  'Basic '+Base64.btoa('user' + ':' + '123456')
                                  },
                                  body: 'Your Body goes here',
                                }}
                                style={{width: 200, height: 87}}
                                // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                //source = {{uri: 'http://user:123456@'+ IP+'/'+val}}
                                //source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                            />
                            <Text>{val}</Text>
                        </View>
                    })}
                  </View>
                </ScrollView>
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
    imageView:{
      flex: 1,
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

export default Images;
