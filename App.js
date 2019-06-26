import React, { Component } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Dimensions, 
  TouchableOpacity } from 'react-native';
import Header from './Header';
import Lower from './Lower';

const { height, width } = Dimensions.get("window");




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.contents}>
          <Text>contents</Text>
        </View>
        <Lower />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "space-between",
  },
  contents: {
    flex: 15,
    width: width,
  },
});
