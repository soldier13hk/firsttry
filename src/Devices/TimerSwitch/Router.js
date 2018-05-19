import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './components/Main';
import TimerList from './components/TimerList';



const RouterComponent = () => {
    return (
      <Router>
        <Scene key='root'>
          <Scene key="timerhome" component={Main} title="Mode Selection"/>
          <Scene key="timerlist" component={TimerList} title="Timeslot List"
          onRight={() => Actions.timerlist()}
          rightTitle="Return"/>

        </Scene>
      </Router>
    );
};

export default RouterComponent;
