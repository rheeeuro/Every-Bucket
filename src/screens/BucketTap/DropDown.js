import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Ionicons } from "@expo/vector-icons";

class DropDown extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };
  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View style={styles.menuWrapper}>
        <Menu
          style={styles.downMenu}
          ref={this.setMenuRef}
          button={<Ionicons color="#2b2b2b" size={25} name="ios-more" onPress={this.showMenu} />}
        >
          <MenuItem onPress={this.hideMenu}>수정</MenuItem>
          <MenuItem onPress={this.hideMenu}>삭제</MenuItem>
          <MenuItem onPress={this.hideMenu}>공유</MenuItem>
        </Menu>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  menuWrapper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  downMenu:{
    justifyContent:'center',
    width: 80
  }

})

export default DropDown; 