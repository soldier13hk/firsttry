import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/Main';
import createStore from './src/Ducks/createStore';
import firebase from 'firebase'

class App extends React.Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyDZ9I6AneoipB5__QnkO3TgKI-UIENG9SU",
            authDomain: "firsttry-22613.firebaseapp.com",
            databaseURL: "https://firsttry-22613.firebaseio.com",
            projectId: "firsttry-22613",
            storageBucket: "firsttry-22613.appspot.com",
            messagingSenderId: "111265804741"
        };
        firebase.initializeApp(config);


    }
    render() {
        const store = createStore();
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

export default App;
