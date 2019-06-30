import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font'


const { height, width } = Dimensions.get("window");

export default class HeaderComponent extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'BMHANNA': require('./assets/fonts/BMHANNA_11yrs_ttf.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
      return (
        <Header 
          placement="left"
          leftComponent={{ icon: 'menu', color: '#6675FF' }}
          centerComponent={this.state.fontLoaded ? ({ 
            text: '모두의 Bucket', 
            style: { color: '#6675FF', fontSize: 20, fontFamily: 'BMHANNA' } 
          }) : null}
          rightComponent={ <RightComponent /> }
          containerStyle={{ backgroundColor: '#fcfcfc' }}
        />
      );
  }
}

class RightComponent extends Component {
  render() {
    return (
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={styles.icons}>
          <Ionicons color="#6675FF" size={30} name="ios-search" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <Ionicons color="#6675FF" size={30} name="ios-home" />
        </TouchableOpacity>
      </View>
    );
  }
}
  

const styles = StyleSheet.create({
  icons: {
    marginHorizontal: 10
  }
});