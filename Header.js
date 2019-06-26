import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';


const { height, width } = Dimensions.get("window");

export default class Header extends Component {
    render() {
        return (
            <View style={styles.upper}>
                <View style={styles.upperContents}>
                  <View style={styles.logo}>
                      <Text>모두의</Text>
                      <Text>Bucket</Text>
                  </View>
                  <View style={styles.upperBtns}>
                      <TouchableOpacity>
                      <View style={styles.circle}>
                          <Text>검색</Text>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <View style={styles.circle}>
                          <Text>설정</Text>
                      </View>
                      </TouchableOpacity>
                  </View>
                </View>
            </View>
        );
    }
}
  

const styles = StyleSheet.create({    
    upper: {
      flex: 3,
      width: width,
      backgroundColor: '#E5E5E5',
      borderBottomWidth: 1,
      borderBottomColor: 'blue'
    },
    upperContents: {
      flex: 1,
      marginTop: 50,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    logo: {
      marginLeft: 20,
      marginVertical: 15
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 3,
      marginRight: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    upperBtns: {
      flexDirection: "row",
      marginVertical: 10
    }
});