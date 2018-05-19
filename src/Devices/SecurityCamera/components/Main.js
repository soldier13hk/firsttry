import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View, Linking  } from 'react-native';
import * as Colors from '../../Themes/colors';
import {Button,CardSection} from '../../../constants/commonUI';
import {Actions} from "react-native-router-flux/index";
import {CameraIP} from '../../../constants/serverIP';
let link="https://user:"+"123456@"+CameraIP+"/stream";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
          <View style={styles.container}>
              <CardSection>
                  <Button onPress={()=>{ Linking.openURL(link)}}>Camera Stream</Button>
              </CardSection>
              <CardSection>
                  <Button onPress={() => Actions.cameraimages()}>Stored Images from Camera</Button>
              </CardSection>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width:300,
    height:125
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  btnSubmit: {
      justifyContent: 'center',
      padding: 10,
      flexDirection: 'row',
  },
  input: {
      height: 40,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 5,
  },
})

export default Main;
