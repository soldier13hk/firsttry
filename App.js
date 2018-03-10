import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/Main';
import createStore from './src/Ducks/createStore';
import firebase from 'firebase';
import {firebaseConfig} from './src/constants/config';
import BackgroundTimer from 'react-native-background-timer';
import {loginUserAuto, loginUserSuccess} from "./src/Drawer/Login/actions";
//import {connect} from 'react-redux';

class App extends React.Component {
    constructor() {
        super();
        this.state ={
            //loading: true,
        };
        !firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app();
        // setTimeout = BackgroundTimer.setTimeout().bind(BackgroundTimer);
        // setInterval = BackgroundTimer.setInterval().bind(BackgroundTimer);
        // clearTimeout =BackgroundTimer.clearTimeout().bind(BackgroundTimer);
        // clearInterval =BackgroundTimer.clearInterval().bind(BackgroundTimer);
        console.ignoredYellowBox = ['Setting a timer'];
    }
    componentWillMount() {
        // var config = {
        //     apiKey: "AIzaSyDZ9I6AneoipB5__QnkO3TgKI-UIENG9SU",
        //     authDomain: "firsttry-22613.firebaseapp.com",
        //     databaseURL: "https://firsttry-22613.firebaseio.com",
        //     projectId: "firsttry-22613",
        //     storageBucket: "firsttry-22613.appspot.com",
        //     messagingSenderId: "111265804741"
        // };
        //!firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app();

        //
        //this.authSubscription();
        //console.log(firebase.auth.currentUser.email);
        //firebase.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);


    }
    // componentDidMount(){
    //     firebase.auth().onAuthStateChanged((user)=>{
    //         if(user){
    //             console.log('user is logged. user:'+firebase.auth().currentUser.email);
    //         }})
    // }

    render() {
        // if (this.state.loading) return null;
        //
        // const store = createStore();
        // if (this.state.user) return  (
        //     <Provider store={store}>
        //         <Main />
        //     </Provider>
        // );
        const store = createStore();
        //console.log('app,render,user:'+firebase.auth().currentUser.email);
        return(
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}

export default App;
//export default connect(mapStateToProps,{loginUserSuccess,loginUserAuto})(Main);