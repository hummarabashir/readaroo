/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useState, useEffect } from 'react';
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
  TouchableOpacity,
  Button,
  ImageBackground, 
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { SvgXml, ClipPath } from 'react-native-svg';
// import Greetings from './screens/greetings';
import { createStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GreetingMessageContext = createContext();

const GreetingMessageProvider = ({ children }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const currentTime = new Date().getHours();
      if (currentTime >= 5 && currentTime < 12) {
        setGreeting('Good Morning!');
      } else if (currentTime >= 12 && currentTime < 17) {
        setGreeting('Good Afternoon!');
      } else {
        setGreeting('Good Evening!');
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <GreetingMessageContext.Provider value={greeting}>
      {children}
    </GreetingMessageContext.Provider>
  );
};


const Home = ({navigation}) => {
  const checkName = async () => {
    try {
      const name = await AsyncStorage.getItem('kidName');
      if (name) {
        navigation.navigate('Buttons');
      } else {
        navigation.navigate('Name');
      }
    } catch (error) {
      console.error('Error checking name:', error);
    }
  };
  return(
  <>
  <View style={{backgroundColor: "#1f354b"}}>
  <StatusBar barStyle = "light-content" hidden = {true} translucent />
  </View>
  <View style={styles.container}>
    <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>
      {/* <Text style={styles.text}>Inside</Text> */}
      <View style={styles.contain}>

      <View style={styles.row}>
    <View style={styles.logocontainer}>
<Image
                  source={require('../assets/images/bee-logo.png')}
                  style={styles.image}
                />
                </View>
                <View style={styles.logocontainer}>
                <Text style={styles.title}>read<Text style={styles.atitlespan}>A</Text><Text style={styles.titlespan}>roo</Text></Text>
                </View>
                </View>
                {/* </ImageBackground> */}

                {/* <Greetings/> */}
                <GreetingMessageProvider>
      <View>
        <GreetingMessageContext.Consumer>
          {(greeting) => <Text style={styles.greetings}>{greeting}</Text>}
        </GreetingMessageContext.Consumer>
      </View>
    </GreetingMessageProvider>
           
                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Buttons')}>
                    <Text>Let's GO -></Text>
</TouchableOpacity> */}
{/* <View style={styles.hexagon}>
  <Button  color="#ffffff"

        title="Little 2 Trivia"
        onPress={() => navigation.navigate('Buttons')}
      />
      </View> */}
      <TouchableOpacity style={styles.hexagon} onPress={checkName}>
      <View style={styles.hexagonInner}>
        <Text style={styles.hexagonText}>Little 2</Text>
      </View>
      <View style={styles.hexagonBefore}></View>
      <View style={styles.hexagonAfter}></View>
    </TouchableOpacity>

      </View>

    </ImageBackground>
  </View>
  </>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 10,
    backgroundColor: '#1f354b',
    // fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
  },
  greetings: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 40
  },
  text: {
    color: 'white',
    fontSize: 44,
    // lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 120,  
    margin: -16
  },
  title: {
    color: '#f7bf31',
    fontWeight: '900',
    fontSize: 34,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: 2
  
  },
  titlespan: {
    color: '#ffffff',
    fontWeight: '200',
    fontSize: 40
  },
  atitlespan: {
    fontSize: 50,
    color: '#fff'
  },
  contain: {
    flex: 1,
     flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // marginTop: -30
  },
  logocontainer: {
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hexagon: {
    width: 80,
    height: 40,
    backgroundColor: "#FFC107",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  hexagonInner: {
    width: 80,
    height: 40,
    backgroundColor: "#FCC616",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  hexagonText: {
    color: "#1f354b",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#FCC616",
  },
  hexagonBefore: {
    position: "absolute",
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 40,
    borderLeftColor: "transparent",
    borderRightWidth: 40,
    borderRightColor: "transparent",
    borderBottomWidth: 26,
    borderBottomColor: "#FCC616",
  },
  hexagonAfter: {
    position: "absolute",
    bottom: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 40,
    borderLeftColor: "transparent",
    borderRightWidth: 40,
    borderRightColor: "transparent",
    borderTopWidth: 25,
    borderTopColor: "#FCC616",
  },
});

export default Home;
