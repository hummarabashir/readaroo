/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


  export default function Games({navigation}) {

    return (
    <>
     <StatusBar barStyle= "light-content" hidden= {false} backgroundColor="#1f354b" translucent= {true} />
     {/* <SafeAreaView style={styles.container}>
     <ScrollView style={styles.scrollView}> */}
    <ScrollView contentContainerStyle={{flexGrow: 1}}>

    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>
    <View style={styles.pressbox}>

                <Pressable style={styles.box} onPress={() => navigation.navigate('Quiz')}>
                  <View>
                  <Text style={styles.heading}>Quiz</Text>
                  <Text style={styles.phrasetext}>Phase 2</Text>
                  </View>
                </Pressable>

                <Pressable style={styles.box2} onPress={() => navigation.navigate('MatchingPairs')}>
                  <View>
                  <Text style={styles.headingBlack}>Matching Pairs</Text>
                  <Text style={styles.phrasetextBlack}>Phase 2</Text>
                  </View>
                </Pressable>

                <Pressable style={styles.box3} onPress={() => navigation.navigate('SpellingGame')}>
                  <View>
                  <Text style={styles.heading}>Spelling Game</Text>
                  <Text style={styles.phrasetext}>Phase 2</Text>
                  </View>
                </Pressable>

                <Pressable style={styles.box6} onPress={() => navigation.navigate('ListeningGame')}>
                  <View>
                  <Text style={styles.headingBlack}>Listening Game</Text>
                  <Text style={styles.phrasetextBlack}>Phase 2</Text>
                  </View>
                </Pressable>

                <Pressable style={styles.box4} onPress={() => navigation.navigate('ReadingGame')}>
                  <View>
                  <Text style={styles.heading}>Reading Game</Text>
                  <Text style={styles.phrasetext}>Phase 2</Text>
                  </View>
                </Pressable>

                <Pressable style={styles.box5} onPress={() => navigation.navigate('WordGame')}>
                  <View>
                  <Text style={styles.headingBlack}>Word Game</Text>
                  <Text style={styles.phrasetextBlack}>Phase 2</Text>
                  </View>
                </Pressable>
                </View>
</ImageBackground>
    </View>
    </ScrollView>
    {/* 
    </SafeAreaView> */}
    </>
  )
};
  var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // height: '100%',
      backgroundColor: '#1f354b',
      // fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
    },
    bgimage: {
      flex: 1,
      justifyContent: 'center',
    },

heading: {
  fontWeight: "bold",
  paddingBottom: 3,
  color: '#ffffff',
  fontSize: 19
 },
phrasetext: {
  color: '#ffffff',
  fontSize: 14,
},
headingBlack: {
  fontWeight: "bold",
  paddingBottom: 3,
  color: '#000',
  fontSize: 19
},
phrasetextBlack: {
    color: '#000',
    fontSize: 14,
  },
  pressbox: {
    width: 350,
    // justifyContent: 'center',
    alignItems: 'center',
    
  },
box: {
  backgroundColor: '#6b74e0',
  width: 230,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 20,
  flexDirection: 'row',
  flexWrap: 'wrap',
  
},
box2: {
  backgroundColor: '#f878b5',
  width: 230,
  borderRadius: 16,
  padding: 20,
  color: '#000000',
  marginTop: 20,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box3: {
  backgroundColor: '#0671d5',
  width: 230,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 20,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box4: {
  backgroundColor: '#11c684',
  width: 230,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 20,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box5: {
    backgroundColor: '#6cdfef',
    width: 230,
    borderRadius: 16,
    padding: 20,
    color: '#000000',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 60
  },
  box6: {
    backgroundColor: '#f7bf31',
    width: 230,
    borderRadius: 16,
    padding: 20,
    color: '#000000',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});