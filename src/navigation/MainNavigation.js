    
import React from 'react';
import { 
  createSwitchNavigator, // here
  createStackNavigator, 
  createAppContainer 
} from 'react-navigation';

import TabNavigation from '../navigation/TapNavigation';

// import DetailScreen from '../screens/DetailScreen';


const AppStack = createStackNavigator({
    Main:{
        screen:TabNavigation
    },
    // Details:{
    //     screen:DetailScreen
    // }
},
{
    initialRouteName: "Main",
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null
    }
});

export default createAppContainer(AppStack);

// export default createAppContainer(createSwitchNavigator(
//     {
//       AuthLoading: AuthLoadingScreen,
//       App: AppStack,
//       Auth: AuthStack,
//     },
//     {
//       initialRouteName: 'AuthLoading'
//     }
//   ));