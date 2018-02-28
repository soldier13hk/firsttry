import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from './utils/navigation';
import NavBarItem from './NavBarItem';
import HomeScreen from './Home';
import UserScreen from './User';
import SecurityCameraScreen from '../Devices/SecurityCamera';
import TimerSwitchScreen from '../Devices/TimerSwitch';
import SecurityLockScreen from '../Devices/SecurityLock';
import TodoScreen from '../Todo';
import * as Colors from './Themes/colors';

const getDrawerItem = navigation => (
    <NavBarItem
        iconName="bars"
        onPress={() => {
            if (navigation.state.index === 0) {
                // check if drawer is not open, then only open it
                navigation.navigate('DrawerOpen');
            } else {
                // else close the drawer
                navigation.navigate('DrawerClose');
            }
        }}
    />
);

const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const userDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);
const cameraDrawerIcon = ({ tintColor }) => getDrawerIcon('camera', tintColor);
const switchDrawerIcon = ({ tintColor }) => getDrawerIcon('lightbulb', tintColor);
const lockDrawerIcon = ({ tintColor }) => getDrawerIcon('lock', tintColor);
const todoDrawerIcon = ({ tintColor }) => getDrawerIcon('pencil', tintColor);


const homeNavOptions = getDrawerNavigationOptions('Home', Colors.primary, 'white', homeDrawerIcon);
const userNavOptions = getDrawerNavigationOptions('Users', Colors.primary, 'white', userDrawerIcon);
const cameraNavOptions = getDrawerNavigationOptions('Security Camera', Colors.primary, 'white', cameraDrawerIcon);
const switchNavOptions = getDrawerNavigationOptions('Timer Switch', Colors.primary, 'white', switchDrawerIcon);
const lockNavOptions = getDrawerNavigationOptions('Security Door Lock', Colors.primary, 'white', lockDrawerIcon);
const todoNavOptions = getDrawerNavigationOptions('Todo List', Colors.primary, 'white', todoDrawerIcon);


const Drawer = DrawerNavigator({
    HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
    UserScreen: { screen: UserScreen, navigationOptions: userNavOptions },
    SecurityCameraScreen: { screen: SecurityCameraScreen, navigationOptions: cameraNavOptions },
    TimerSwitchScreen: { screen: TimerSwitchScreen, navigationOptions: switchNavOptions },
    SecurityLockScreen: { screen: SecurityLockScreen, navigationOptions: lockNavOptions },
    TodoScreen: { screen: TodoScreen, navigationOptions: todoNavOptions },
}, getDrawerConfig(300, 'left', 'HomeScreen'));

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('ReactNavDrawer', Colors.primary, 'white', getDrawerItem(navigation));

export default Drawer;
