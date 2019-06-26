import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';


const { height, width } = Dimensions.get("window");

export default class Lower extends Component {
    render() {
        return (
            <View style={styles.lower}>
                <View style={styles.touchs}>
                    <TouchableOpacity style={styles.left}>
                        <Text>트렌드</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.center}>
                        <Text>버킷리스트</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.right}>
                        <Text>마이페이지</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
  

const styles = StyleSheet.create({    
    lower: {
        flex: 2,
        backgroundColor: '#E5E5E5',
        width: width,
        borderTopWidth: 1,
        borderTopColor: 'black',
        justifyContent: "center",
      },
      touchs: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 5
      },
      left: {
        marginLeft: 20,
        width: width/5,
        alignItems: "center"
      },
      center: {
        width: width/5,
        alignItems: "center"
      },      
      right: {
        marginRight: 20,
        width: width/5,
        alignItems: "center"
      }
});