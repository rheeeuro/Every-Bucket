import React, { Component } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Dimensions, 
  TouchableOpacity } from 'react-native';
import HeaderComponent from './Header';
import Footer from './Footer';
import { Divider } from 'react-native-elements';



const { height, width } = Dimensions.get("window");




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <Divider style={{ backgroundColor: 'blue' }} />
        <View style={styles.contents}>
          <Text>contents</Text>
          
        </View>
        <Divider style={{ backgroundColor: 'blue' }} />
        <Footer />
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
