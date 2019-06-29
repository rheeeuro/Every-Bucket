import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const { height, width } = Dimensions.get("window");

export default class HeaderComponent extends Component {
    render() {
        return (
          <Header 
            placement="left"
            leftComponent={{ icon: 'menu', color: '#273BE7' }}
            centerComponent={{ text: '모두의 Bucket', style: { color: '#273BE7', fontSize: 20 } }}
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
          <Ionicons color="#273BE7" size={30} name="ios-search" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <Ionicons color="#273BE7" size={30} name="ios-home" />
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