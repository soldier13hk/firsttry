import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomeScene from './components/HomeScene';
import CreateGroup from './components/CreateGroup';
import SignInGroup from './components/SignInGroup';
import FamilyGroupConfirm from './components/FamilyGroupConfirm';

const RouterComponent = () => {
    console.log('homerouter');
    return (

        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="homeIndex">
                <Scene
                    key="homeMain"
                    component={HomeScene}
                    title="Family Page"
                    initial
                />
                <Scene key="groupCreate" component={CreateGroup} title="Create a new Family Group" />
                <Scene key="groupSignIn" component={SignInGroup} title="Sign In an existing Family Group" />
                <Scene key="familyGroupConfirm" component={FamilyGroupConfirm} title="Family Group Confirmation" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
