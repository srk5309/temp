import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import Splash from './screens/Splash'
import Stage2 from './screens/Stage2'
import Otpscreen from './screens/Otpscreen'
import Login from './screens/Login'
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();

const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} 
        options={{
          headerStyle:{
            backgroundColor: "#23287D"
          },
          title: '',
          headerTitleStyle: {
            textAlign: "center",
            color: "white",
            padding:10
          }
        }}/>
        <Stack.Screen name="Stage2" component={Stage2} 
        options={{
          headerStyle:{
            backgroundColor: "#23287D",
            color:'white'
          },
          title: '',
          headerTitleStyle: {
            textAlign: "center",
            color: "white",
            padding:10
          },
          headerTintColor:'white',
          headerRight:{
            
          }
        }}/>
        <Stack.Screen name="Otpscreen" component={Otpscreen} 
        options={{
          headerStyle:{
            backgroundColor: "#23287D"
          },
          title: '',
          headerTitleStyle: {
            textAlign: "center",
            color: "white",
            padding:10
          }
        }}/>

        <Stack.Screen name="Login" component={Login} 
        options={{
          headerStyle:{
            backgroundColor: "#23287D"
          },
          title: '',
          headerTitleStyle: {
            textAlign: "center",
            color: "white",
            padding:10
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App























