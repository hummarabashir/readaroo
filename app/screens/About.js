import React, { useState, useEffect, useContext } from 'react';
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
import { KidContext } from './screens/KidContext';


export default function Buttons({navigation}) {
  const { setKidName } = useContext(KidContext);

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

  const onChangeText = async (inputText) => {
    if (inputText.length <= 6 && !inputText.includes(' ')) {
      await AsyncStorage.setItem('name', inputText);
      setName(inputText);
    }
  };

  const saveName = async () => {
    // await AsyncStorage.setItem('kidName', name);
    if (name.trim() !== '') {
      setKidName(name);
      await AsyncStorage.setItem('kidName', name);
      Alert.alert("Great, Little Learner!", 'Your account has been updated!');
    } else {
      const savedName = await AsyncStorage.getItem('kidName');
      if (savedName) {
        setName(savedName);
      }
      Alert.alert("Attention, Little Learner!", 'Please enter your name/nickname to update your account!');
    }

  };

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
          <View style={styles.profile}>
                  <Text style={styles.welcomeText}>Profile Setting</Text>
                  {/* <Text style={styles.welcomeSubText}>hello {name || 'Kid'}</Text> */}
                  <Image source={require('../assets/images/updateProfile.png')}
                  style={styles.image} />
                  <View style={styles.inputBlock}>
      <Text style={styles.inputText}>Update your name/nickname?</Text>
      <Text style={styles.inputSubText}>(only 6 characters allowed / no space)</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
        maxLength={6}
      />
      </View>
                  <View>
                  <TouchableOpacity style={styles.buttonUpdate} onPress={saveName}>
          <Text style={styles.buttonText}>Update Account</Text>
          </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBlock} onPress={handleDeleteData}>
          <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
          </View>

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
    width: 220,
    height: 220,  
    alignSelf: "center"
  },
  profile: {
    width: 300
  },
  welcomeText: {
    // alignSelf: 'center',
    textAlign: 'left',
    color: '#f7bf31',
    fontSize: 26,
    paddingBottom: 8,
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: 20
  },
  welcomeSubText: {
    alignSelf: 'center',
    color: '#FCC616',
    fontSize: 18,
    paddingBottom: 8,
    fontWeight: "200",
  },
  inputBlock: {
    marginBottom: 12,
  },
  inputText: {
    color: '#6cdfef',
    fontSize: 17,
    marginBottom: 3,
  },
  inputSubText: {
    color: '#fff',
    fontSize: 8,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: "#6b74e0",
    color: "#fff",
  },
  buttonUpdate: {
    backgroundColor: "#6cdfef",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
},
buttonBlock: {
  backgroundColor: "#f878b5",
  paddingTop: 10,
  paddingBottom: 10,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 20
},
buttonText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#000"
},
});
