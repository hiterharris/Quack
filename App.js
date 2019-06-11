import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';

const profileImage = 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/23172895_1438203092916138_4641129154353713970_n.png?_nc_cat=1&_nc_oc=AQmjxrC3dmLJWSej8bvlNjEuFhfdUhDacpHX2hNqufib-Sm-MFD38xHe1j3xN5dFqLDzDdyL5JySkzrj2Euw9KTW&_nc_ht=scontent-iad3-1.xx&oh=4252b960c66120475231b538f2c5f237&oe=5D7EC494';

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
