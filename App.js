import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomePage from './screens/HomePage'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import {AppTabNavigator} from './Components/AppTabNavigator'
export default class App extends React.Component {
  render(){

  
  return (
    <View style={styles.container}>
      
      <AppContainer/>
      
    </View>
  );
}
}

var Appnavigator= createSwitchNavigator({
  Homescreen:{screen:HomePage},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer= createAppContainer(Appnavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
   
  },
  
 
  
  
});
