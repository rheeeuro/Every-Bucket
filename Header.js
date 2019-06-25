import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';


const { height, width } = Dimensions.get("window");

export default class Header extends Component {
    render() {
        return (
            <View style={styles.upper}>
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
        );
    }
}
  

const styles = StyleSheet.create({    
    upper: {
      flex: 1,
      width: width,
      height: 65,
      backgroundColor: '#E5E5E5',
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 30,
      borderBottomWidth: 1,
      borderBottomColor: 'blue'
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