/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';


// import Blob from './assets/images/blob.svg';
// source={ { uri: "https://facebook.github.io/react-native/img/header_logo.png" } }
// const xml = `
// <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" style={styles.dove} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2-2.1-13.5-19-18.8-27.8-8.3-21.1 24.9-37.7 54.1-48.9 86.5 34.2 38.3 80 64.6 130.8 75.1zM400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9 13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7 20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64H400zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path></svg>
// `;


export default function Buttons({navigation}) {
    // StatusBar.setBarStyle('dark-content', true);
    const [name, setName] = useState('');

    useEffect(() => {
      const getName = async () => {
        const savedName = await AsyncStorage.getItem('kidName');
        if (savedName) {
          setName(savedName);
        }
      };
  
      getName();
    }, []);
    return (
      <>
      <StatusBar barStyle= "light-content" hidden= {false} backgroundColor="#1f354b" translucent= {false} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

      <View style={styles.container}> 
      {/* <ScrollView > */}

          <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain" style={styles.bgimage}>
          {/* <View style={styles.imageContainer}> */}
    <Image source={require('../assets/images/bee-logo.png')}
                  style={styles.image} />
                  <View style={styles.welcomeText}>
                  <Text style={styles.welcomeText}>{name || 'Kid'}, Welcome Little Learner !!</Text>
                  </View>
                {/* </View> */}
                <View style={styles.pressbox}>
          <Pressable style={styles.box} onPress={() => navigation.navigate('AlphaTots')}>
          <Text style={styles.heading}>Alpha Tots</Text>

                  <View style={{width: "60%"}}>
                  <Text style={styles.phrasetext}>26 Letters</Text>
                  </View>
                  <View style={{width: "40%"}}>
                  <Image style={styles.boxImage} source={require('../assets/images/bird.png')}/>
                  {/* <SvgXml xml={xml} style={styles.svg}/> */}
                  </View>
                </Pressable>
                <Pressable style={styles.box2} onPress={() => navigation.navigate('AlphaPhonics')}>
                <Text style={styles.heading}>Alpha Phonics</Text>

                  <View style={{width: "60%"}}>
                  
                  <Text style={styles.phrasetext}>03 Decks</Text>
                  </View>
                  <View style={{width: "40%"}}>
                  <Image style={styles.boxImage}
                  source={require('../assets/images/leaf.png')}/>
                  </View>
                </Pressable>

                <Pressable style={styles.box3} onPress={() => navigation.navigate('Playcard')}>
                <Text style={styles.heading}>Flash Cards</Text>

                  <View style={{width: "60%"}}>
                  <Text style={styles.phrasetext}>22 Cards</Text>
                  </View>
                  <View style={{width: "40%"}}>
                  <Image style={styles.boxImage}
                  source={require('../assets/images/butterfly.png')}/>
                  </View>
                </Pressable>

                <Pressable style={styles.box4} onPress={() => navigation.navigate('Games')}>
                <Text style={styles.heading}>Games</Text>

                  <View style={{width: "60%"}}>
                  <Text style={styles.phrasetext}>Practice your sounds</Text>
                  </View>
                  <View style={{width: "40%"}}>
                  <Image style={styles.boxImage}
                  source={require('../assets/images/flower.png')}/>
                  </View>
                </Pressable>

                <Pressable style={styles.box5} onPress={() => navigation.navigate('About')}>
                <Text style={styles.heading}>Settings</Text>

                  <View style={{width: "60%"}}>
                  <Text style={styles.phrasetext}>Manage your preferences</Text>
                  </View>
                  <View style={{width: "40%"}}>
                  <Image style={styles.boxImage}
                  source={require('../assets/images/beehive.png')}/>
                  </View>
                </Pressable>

                </View>
</ImageBackground>
{/* </ScrollView> */}

    </View> 
    </ScrollView>
    </>
 )
};
  var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // width: '100%',
      // height: '100%',
      backgroundColor: '#1f354b',
      // fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
    },
    bgimage: {
      flex: 1,
      justifyContent: 'center',
    },
    contain: {
      flex: 1,
       flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      // marginTop: -80
    },
    image: {
    width: 100,
    height: 100,  
    alignSelf: "center"
  },
  welcomeText: {
    alignSelf: 'center',
    color: '#C5E4EE',
    fontSize: 15,
    paddingBottom: 8,
    fontWeight: "200",
  },
heading: {
  fontWeight: "bold",
  paddingBottom: 3,
  color: '#ffffff',
  fontSize: 19,
  width: "100%"
 },
phrasetext: {
  color: '#ffffff',
  fontSize: 14,
},
pressbox: {
  width: 350,
  justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30
},
box: {
  backgroundColor: '#6b74e0',
  width: 220,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 22,
  flexDirection: 'row',
  flexWrap: 'wrap',
  
},
box2: {
  backgroundColor: '#11c684',
  width: 220,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 15,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box3: {
  backgroundColor: '#0671d5',
  width: 220,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 15,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box4: {
  backgroundColor: '#f878b5',
  width: 220,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 15,
  flexDirection: 'row',
  flexWrap: 'wrap',
},
box5: {
  backgroundColor: '#6b74e0',
  width: 220,
  borderRadius: 16,
  padding: 20,
  color: '#ffffff',
  marginTop: 15,
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginBottom: 20
},
boxImage: {
  width: 42,
  height: 42,
  marginLeft: 45,
  marginTop: 10,
},
});
