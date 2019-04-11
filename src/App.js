import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomsList from './components/RoomsList'
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDA03YY2qfaeV5bq9RPegkT0GmHO-JB9WQ",
    authDomain: "rooms-935de.firebaseapp.com",
    databaseURL: "https://rooms-935de.firebaseio.com",
    projectId: "rooms-935de",
    storageBucket: "rooms-935de.appspot.com",
    messagingSenderId: "578717852404"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chat</h1>
          <RoomsList firebase={firebase} />
        </header>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
