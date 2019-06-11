import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.profileContainer}>
          <Card />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileContainer: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 120,
  }
});
