import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/Main';
import createStore from './src/Ducks/createStore';
import firebase from 'firebase';
import {firebaseConfig} from './src/constants/config';
import BackgroundTimer from 'react-native-background-timer';

class App extends React.Component {
    constructor() {
        super();
        this.state ={
            //loading: true,
        };
        // setTimeout = BackgroundTimer.setTimeout().bind(BackgroundTimer);
        // setInterval = BackgroundTimer.setInterval().bind(BackgroundTimer);
        // clearTimeout =BackgroundTimer.clearTimeout().bind(BackgroundTimer);
        // clearInterval =BackgroundTimer.clearInterval().bind(BackgroundTimer);
        console.ignoredYellowBox = ['Setting a timer'];
    }
    // componentDidMount(){
    //     this.authSubscription =
    //         firebase.auth().onAuthStateChanged((user)=>{
    //             this.setState({
    //                 loading: false,
    //                 user,
    //             });
    //         });
    //     //console.log('current user: '+firebase.auth().currentUser.email);
    // }
    componentWillMount() {
        // var config = {
        //     apiKey: "AIzaSyDZ9I6AneoipB5__QnkO3TgKI-UIENG9SU",
        //     authDomain: "firsttry-22613.firebaseapp.com",
        //     databaseURL: "https://firsttry-22613.firebaseio.com",
        //     projectId: "firsttry-22613",
        //     storageBucket: "firsttry-22613.appspot.com",
        //     messagingSenderId: "111265804741"
        // };
        !firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app();
        //this.authSubscription();
        //console.log(firebase.auth.currentUser.email);
        //firebase.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);


    }
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
        return(
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}

export default App;
