import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/Components/Common/';
import LoginForm from "./src/Components/LoginForm"
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header textShown = "Firebase Authentication" />
        <LoginForm />
      </View>
    );
  }
}

