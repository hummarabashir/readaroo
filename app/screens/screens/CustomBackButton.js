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
import { useNavigation } from '@react-navigation/native';


export default function Buttons() {
    const navigation = useNavigation();
    return(
        <View>
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
        >
            {/* <Image style={styles.backImage} source={require('../assets/images/back.png')} /> */}
            <Text style={styles.backText}>Home</Text>
        </TouchableOpacity>
    </View>
    )
}
var styles = StyleSheet.create({
    backImage: {
        width: 20,
        height: 20,
    },
    backText: {
        fontSize: 18,
        color: '#6cdfef'
    }

});
