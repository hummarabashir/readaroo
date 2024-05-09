// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, {Component, useEffect} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Home from './screens/Home';
import Name from './screens/Name';
import About from './screens/About';
import Buttons from './screens/Buttons';
import AlphaTots from './screens/AlphaTots';
import AlphaPhonics from './screens/AlphaPhonics';
import BeginnerPhonics from './screens/BeginnerPhonics';
import IntermediatePhonics from './screens/IntermediatePhonics';
import AdvancedPhonics from './screens/AdvancedPhonics';
import Playcard from './screens/Playcard';
import Quiz from './screens/Quiz';
import Games from './screens/Games';
import MatchingPairs from './screens/MatchingPairs';
import SpellingGame from './screens/SpellingGame';
import ListeningGame from './screens/ListeningGame';
import ReadingGame from './screens/ReadingGame';
import WordGame from './screens/WordGame';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from 'react-native-splash-screen';
import CustomBackButton from './screens/screens/CustomBackButton';


const Stack = createNativeStackNavigator()
export default function App() { 
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
    return ( 
      <NavigationContainer> 
        <Stack.Navigator> 
          <Stack.Screen name="Home" component = {Home} options={{ headerShown: false }} /> 
          <Stack.Screen name="Name" component = {Name}   options={{
      title: '',
      
      headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      },
      headerBackTitle: 'Home',
    }}/> 
          <Stack.Screen name="Buttons" component = {Buttons}   options={{
      title: '',
      
      headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      },
      headerLeft: () => <CustomBackButton/>,
      // headerRight: () => (
      //   <Button
      //     onPress={() => alert('This is a button!')}
      //     title="Info"
      //     color="#fff"
      //   />
      // ),
      // headerBackTitle: 'Home',
    }}/> 
    {/* options={{
    header: () =>
        (
          <View style={{ height: 70 , backgroundColor: 'red'}}>
            {/* <BackArrow navigation={navigation.goBack} style={{ position: 'absolute', left: 30, bottom: 35 }} /> 
            <View style={{ position: 'absolute', left: 30, bottom: 0 }} >
              <Text>TITLE</Text>
            </View>
          </View>
        ),
          }} */}
              <Stack.Screen name="About" component = {About}   options={{
      title: '',
      
      headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      },
    }}/>
          <Stack.Screen name="AlphaTots" component = {AlphaTots} options={{ headerTitle: "AlphaTots",     headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      }, }}/>
         <Stack.Screen name="AlphaPhonics" component = {AlphaPhonics} options={{     headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      },}}/>
          <Stack.Screen name="BeginnerPhonics" component = {BeginnerPhonics} options={{ headerTitle: "Beginner Phonics",    headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerBackTitleVisible: false,
      headerTitleStyle: {
        color: 'white'
      },}} />
      <Stack.Screen name="IntermediatePhonics" component = {IntermediatePhonics} options={{ headerTitle: "Intermediate Phonics",    headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerBackTitleVisible: false,
      headerTitleStyle: {
        color: 'white'
      },}} />
      <Stack.Screen name="AdvancedPhonics" component = {AdvancedPhonics} options={{ headerTitle: "Advanced Phonics",    headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerBackTitleVisible: false,
      headerTitleStyle: {
        color: 'white'
      },}} />
          <Stack.Screen name="Playcard" component = {Playcard} options={{     headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      },}} />
          <Stack.Screen name="Quiz" component = {Quiz} options={{ headerTitle: "Trivia Quiz",  headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      },
    }} />
          <Stack.Screen name="Games" component = {Games} options={{     headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      },}}/>
          <Stack.Screen name="MatchingPairs" component={MatchingPairs} options={{ headerTitle: "Matching Pairs" , headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      },}} />
          {/* options={{ headerShown: false }} */}
          <Stack.Screen name="SpellingGame" component={SpellingGame} options={{ headerTitle: "Spelling Game", headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      }, }} />
          <Stack.Screen name="ListeningGame" component={ListeningGame} options={{ headerTitle: "Listening Game", headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      }, }} />
          <Stack.Screen name="ReadingGame" component={ReadingGame} options={{ headerTitle: "Reading Game", headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      }, }} />
          <Stack.Screen name="WordGame" component={WordGame} options={{ headerTitle: "Word Game", headerStyle: {
        backgroundColor: '#1f354b',
      },
      headerTintColor: '#6cdfef',
      headerShadowVisible: false,
      headerTitleStyle: {
        color: 'white'
      }, }} /> 
        </Stack.Navigator> 
      </NavigationContainer> 
    );
  }

// import * as React from 'react';
// import { Text, View, StyleSheet, StatusBar } from 'react-native';
// import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';


// const CustomStatusBar = (
//   {
//     backgroundColor,
//     barStyle = "light-content",
//     //add more props StatusBar
//   }
// ) => { 
   
//    const insets = useSafeAreaInsets();

//    return (
//      <View style={{ height: insets.top, backgroundColor }}>
//         <StatusBar
//           animated={true}
//           backgroundColor={backgroundColor}
//           barStyle={barStyle} />
//      </View>
//    );
// }


// export default function App() {

//   return (
//     <SafeAreaProvider>
//       <CustomStatusBar backgroundColor="#1f354b" />
//       <View style={{ flex: 1, backgroundColor: '#1f354b' }}>
         
//       </View>
//     </SafeAreaProvider>
//   );

// }
