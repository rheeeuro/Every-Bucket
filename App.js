import React, { Component } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Dimensions, 
  TouchableOpacity } from 'react-native';
  import Header from './Header';

const { height, width } = Dimensions.get("window");




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.contents}>
          <Text>contents</Text>
        </View>
        <View style={styles.lower}>
          <TouchableOpacity>
            <Text>트렌드</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>버킷리스트</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>마이페이지</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  contents: {
    flex: 7,
    width: width,
  },
  lower: {
    flex: 0.7,
    backgroundColor: '#E5E5E5',
    width: width,
    borderTopWidth: 1,
    borderTopColor: 'black',
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
