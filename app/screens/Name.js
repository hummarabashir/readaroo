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

  const onChangeText = (inputText) => {
    if (inputText.length <= 6 && !inputText.includes(' ')) {
      setName(inputText);
    }
  };

  const saveName = async () => {
    // await AsyncStorage.setItem('kidName', name);
    if (name.trim() !== '') {
      setKidName(name);
      await AsyncStorage.setItem('kidName', name);
       navigation.navigate('Buttons')
    } else {
      Alert.alert("Attention, Little Learner!", 'Start your learning journey! Tell us your name or nickname to begin!');
    }

  };

  const clearName = async () => {
    await AsyncStorage.removeItem('kidName');
    setName('');
  }; 
    return (
      <>
      <StatusBar barStyle= "light-content" hidden= {false} backgroundColor="#1f354b" translucent= {false} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

      <View style={styles.container}> 

          <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain" style={styles.bgimage}>
            <View style={styles.welcomeBlock}>
          {/* <View style={styles.welcomeText}>
                  <Text style={styles.welcomeText}>Welcome</Text>
                  <Text style={styles.welcomeSubText}>Little Learner!</Text>
                  </View> */}
    <Image source={require('../assets/images/profile1.png')}
                  style={styles.image} />
                  <View style={styles.inputBlock}>
      <Text style={styles.inputText}>Whats your name/nickname?</Text>
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
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Buttons')}> */}

      <TouchableOpacity style={styles.buttonBlock} onPress={saveName}>
        <Text style={styles.buttonText}>Start Learning</Text>
        </TouchableOpacity>
      {/* </TouchableOpacity> */}
    </View>
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
    width: 280,
    height: 280,  
    alignSelf: "center"
  },
  welcomeBlock: {
    width: 280
  },
  welcomeText: {
    alignSelf: 'center',
    color: '#C5E4EE',
    fontSize: 40,
    paddingBottom: 8,
    fontWeight: "900",
  },
  welcomeSubText: {
    alignSelf: 'center',
    color: '#FCC616',
    fontSize: 24,
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
  buttonBlock: {
    backgroundColor: "#f878b5",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35
},
buttonText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#000"
},
});
