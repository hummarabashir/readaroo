import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Pressable,
  Button,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Buttons({navigation}) {
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


//   const clearName = async () => {
//     await AsyncStorage.removeItem('kidName');
//     navigation.navigate('Home');
//   }; 

const handleDeleteData = async () => {
    Alert.alert(
      'Account Reset!',
      'Do you want to say goodbye to your account data?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              await AsyncStorage.clear();
              Alert.alert('Account Poofed!!', 'Success: mission complete!');
              navigation.navigate('Home');
            } catch (error) {
              console.error('Error deleting data:', error);
              Alert.alert('Error', 'An error occurred while deleting data.');
            }
          },
        },
      ],
      {
        cancelable: false,
        customUI: true,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        titleStyle: styles.alertTitle,
        messageStyle: styles.alertMessage,
        buttonStyle: styles.alertButton,
      }
    );
  };


    return (
      <>
      <StatusBar barStyle= "light-content" hidden= {false} backgroundColor="#1f354b" translucent= {false} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

      <View style={styles.container}> 

          <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain" style={styles.bgimage}>
          <View style={styles.welcomeText}>
                  <Text style={styles.welcomeText}>Profile Settings!!</Text>
                  <Text style={styles.welcomeSubText}>hello {name || 'Kid'}</Text>
                  </View>
    <Image source={require('../assets/images/bee-logo.png')}
                  style={styles.image} />
                  <View>
      <TouchableOpacity style={styles.buttonBlock} onPress={handleDeleteData}>
          <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>

      {/* </TouchableOpacity> */}
    </View>
 
</ImageBackground>

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
      backgroundColor: '#1f354b',
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
    },
    image: {
    width: 140,
    height: 140,  
    alignSelf: "center"
  },
  welcomeText: {
    alignSelf: 'center',
    color: '#C5E4EE',
    fontSize: 26,
    paddingBottom: 8,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  welcomeSubText: {
    alignSelf: 'center',
    color: '#FCC616',
    fontSize: 18,
    paddingBottom: 8,
    fontWeight: "200",
  },
  buttonBlock: {
    backgroundColor: "#f878b5",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
},
buttonText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#000"
},
});
