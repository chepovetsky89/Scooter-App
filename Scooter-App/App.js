import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Account from './src/screens/account';
import firebase from './src/utilis/firebase.js';

export default function App() {

  const [isAuth, setisAuth] = useState(false);
  if(firebase.apps.length){
    firebase.auth().onAuthStateChanged((user) => {
      setisAuth(!!user);
    })
  }

  
  return (
    <View style={{flex:1}}>
      {
      isAuth ? 
      (
        <View><Text>Hello</Text></View>
      )
      :
      (
        <Account />
      )
      }
    </View>
  );
}
