import React, { Component } from 'react';
import { ButtonGroup } from 'react-native-elements';
import { StyleSheet, Dimensions } from 'react-native';


const { height, width } = Dimensions.get("window");

export default class Footer extends Component{
  constructor () {
    super()
    this.state = {
      selectedIndex: 1
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render () {
    const buttons = ['트렌드', '버킷리스트', '마이페이지']
    const { selectedIndex } = this.state
  
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 50}}
      />
    )
  }
}

