import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Image
} from 'react-native';
import * as Colors from '../Themes/colors';
import {IP} from '../../constants/serverIP';

class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }
    componentDidMount(){
        //https://facebook.github.io/react-native/movies.json
        return fetch('http://'+IP+'/imagelists')
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
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                    <View style={styles.container}>
                        <Text style={{ textAlign: 'center', color: Colors.primary, marginRight: 10 }}>Timer Switch Screen</Text>
                    </View>
                </View>
            );
        }
        else{
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
                <View>
                    {this.state.dataSource.images.map(function(val,key){
                        console.log('securityCamera/index: '+key+' , '+val+'type: '+ typeof val);
                        return <View>
                            <Image
                                style={{width: 100, height: 100}}
                                // source={{uri: '10.89.182.20:3000/img_fjords.jpg'}}
                                // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                source = {{uri: 'http://'+ IP+'/'+val}}

                            />
                        </View>
                    })}
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
});

export default HomeScreen;
