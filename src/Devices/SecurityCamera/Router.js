import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './components/Main';
import Stream from './components/Stream';
import Images from './components/Images';

const RouterComponent = () => {
    return (
      <Router>
        <Scene key='root'>
          <Scene key="camerahome" component={Main} title="Security Camera"/>
          <Scene key="camerastream" component={Stream} title="Stream"
          onRight={() => Actions.camerahome()}
          rightTitle="Return"/>
          <Scene key="cameraimages" component={Images} title="Images"
          onRight={() => Actions.camerahome()}
          rightTitle="Return"/>
        </Scene>
      </Router>
    );
};

export default RouterComponent;
