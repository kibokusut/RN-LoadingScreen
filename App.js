/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


import MainService from './app/services/mainservice'
import Loading from './app/loading/loading'



export default class App extends Component {
  state = {
    loaded: false
  }
  constructor() {
    super();
    MainService.load(v => this.setState({ loaded: true }));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          {this.state.loaded ? <Text style={styles.txt}>Welcome</Text> : <Loading />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },

  txt: {
    fontSize: 50,
    color: '#fff'
  },

  body: {

  },

});

