import React from 'react';
import { Platform } from 'react-native';
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons"; 
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import BucketTap from '../screens/BucketTap';
import TrendTap from '../screens/TrendTap';
import MyPageTap from '../screens/MyPageTap';


// const HomeStack = createStackNavigator(
//   {
//     //Defination of Navigaton from home screen
//     Home: { screen: Bucket },
//     Details: { screen: TrendPage },
//   },
//   {
//     defaultNavigationOptions: {
//       //Header customization of the perticular Screen
//       headerStyle: {
//         backgroundColor: '#42f44b',
//       },
//       headerTintColor: '#FFFFFF',
//       title: 'Home',
//       //Header title
//     },
//   }
// );
const TapNavigation = createMaterialTopTabNavigator(
  {
    Bucket:{ 
        screen: BucketTap, 
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor }) => <Entypo name="home" size={20} style={{ color: tintColor }}/>
        } 
      },
      Trend:{ 
        screen: TrendTap, 
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor }) => <AntDesign name="search1" size={20} style={{ color: tintColor }}/>
        } 
      },
      MyPage:{ 
        screen: MyPageTap, 
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => <MaterialIcons name="people" size={20} style={{ color: tintColor }}/>
        } 
      },
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: '#227dfc',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor:'white'
      },
      iconStyle: { 
        ...Platform.select({
          ios:{
            height: 35,
            marginBottom: 20
          }
        }) 
      },
      showLabel: false,
      showIcon: true,
    },
    
  }
);
export default createAppContainer(TapNavigation);