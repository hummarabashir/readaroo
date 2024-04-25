// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import {createRootNavigator} from './router';
// import Home from './screens/Home';
// import Buttons from './screens/Buttons';
// import Phase2 from './screens/Phase2';
// import Quiz from './screens/Quiz';
// import Phase5 from './screens/Phase5';
// import Games from './screens/Games';
// import MatchingPairs from './screens/MatchingPairs';
// import SpellingGame from './screens/SpellingGame';
// import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"

// const Stack = createNativeStackNavigator()

// export default function App() { 
//     return ( 
//       <NavigationContainer> 
//         <Stack.Navigator> 
//           <Stack.Screen name="Home" component = {Home} /> 
//           <Stack.Screen name="Buttons" component = {Buttons} /> 
//           <Stack.Screen name="Phase2" component = {Phase2} />
//           <Stack.Screen name="Quiz" component = {Quiz} />
//           <Stack.Screen name="Phase5" component = {Phase5} />
//           <Stack.Screen name="Games" component = {Games} />
//           <Stack.Screen name="MatchingPairs" component={MatchingPairs} options={{ headerTitle: "Matching Pairs" }} />
//           {/* options={{ headerShown: false }} */}
//           <Stack.Screen name="SpellingGame" component={SpellingGame} options={{ headerTitle: "Spelling Game" }} />
//         </Stack.Navigator> 
//       </NavigationContainer> 
//     );
//   }

import {  StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createRootNavigator} from './router';
import Home from './screens/Home';
import Buttons from './screens/Buttons';
import Phase2 from './screens/Phase2';
import Quiz from './screens/Quiz';
import Phase5 from './screens/Phase5';
import Games from './screens/Games';
import MatchingPairs from './screens/MatchingPairs';
import SpellingGame from './screens/SpellingGame';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const CustomStatusBar = (
  {
    backgroundColor,
    barStyle = "light-content",
    //add more props StatusBar
  }
) => { 
   
   const insets = useSafeAreaInsets();

   return (
     <View style={{ height: insets.top, backgroundColor }}>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle} />
     </View>
   );
}


export default function App() {

  return (
    <>
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor="#1f354b" />
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <NavigationContainer> 
         <Stack.Navigator  headerMode={"float"}
      screenOptions={{
        headerBackground: () => <View style={{flex: 1, backgroundColor: "#1f354b"}} />,
        headerTitleStyle: {
            color: 'white'
          },
        backgroundColor: "#1f354b", color: "white"
      }}> 
           <Stack.Screen name="Home" component = {Home} options={{ headerShown: false }}  /> 
           {/* options={{ contentStyle:{color: "white",} }} */}
          <Stack.Screen name="Buttons" component = {Buttons} /> 
         </Stack.Navigator> 
      </NavigationContainer> 
      </View>
      </SafeAreaProvider>

      </>
  );

}
