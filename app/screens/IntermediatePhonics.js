import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { Audio } from "expo-av";

const alphabetSounds = {
  ay: require("../assets/audio/phonics/long/ph_ay.mp3"),
  ie: require("../assets/audio/phonics/long/ph_ie.mp3"),
  ea: require("../assets/audio/phonics/long/ph_ea.mp3"),
  ue: require("../assets/audio/phonics/long/ph_ue.mp3"),
  wh: require("../assets/audio/phonics/long/ph_wh.mp3"),
  ai: require("../assets/audio/phonics/long/ph_ai.mp3"),
  gn: require("../assets/audio/phonics/long/ph_gn.mp3"),
  oa: require("../assets/audio/phonics/long/ph_oa.mp3"),
  sh: require("../assets/audio/phonics/long/ph_sh.mp3"),
  ui: require("../assets/audio/phonics/long/ph_ui.mp3"),
  or: require("../assets/audio/phonics/long/ph_or.mp3"),
  ee: require("../assets/audio/phonics/long/ph_ee.mp3"),
  kn: require("../assets/audio/phonics/long/ph_kn.mp3"),
  th: require("../assets/audio/phonics/long/ph_th.mp3"),
  ie: require("../assets/audio/phonics/long/ph_ie.mp3"),
  ng: require("../assets/audio/phonics/long/ph_ng.mp3"),
  ye: require("../assets/audio/phonics/long/ph_ye.mp3"),
  ar: require("../assets/audio/phonics/long/ph_ar.mp3"),
  ch: require("../assets/audio/phonics/long/ph_ch.mp3"),
  'a-e': require("../assets/audio/phonics/long/ph_a-e.mp3"),
  'i-e': require("../assets/audio/phonics/long/ph_i-e.mp3"),
  'o-e': require("../assets/audio/phonics/long/ph_o-e.mp3"),
  'u-e': require("../assets/audio/phonics/long/ph_u-e.mp3"),
  oar: require("../assets/audio/phonics/long/ph_oar.mp3"),
  ear: require("../assets/audio/phonics/long/ph_ear.mp3"),
  ure: require("../assets/audio/phonics/long/ph_ure.mp3"),
  // Add more letters and their corresponding sound files here
};

const alphabetColors = {
  //purple
  ay: "#11c684", // pink
  ie: "#0671d5", // blue
  ea: "#f878b5", // green
  ue: "#6cdfef",
  wh: "#f7bf31",
  ai: "#6b74e0", //purple
  gn: "#f7bf31", //yellow
  oa: "#0671d5",
  sh: "#f878b5",
  ui: "#6cdfef", //lightblue
  or: "#11c684",
  ee: "#f878b5",
  kn: "#6b74e0",
  th: "#0671d5",
  ie: "#6cdfef",
  ng: "#f7bf31",
  ye: "#f878b5",
  'a-e': "#11c684",
  'i-e': "#0671d5",
  'o-e': "#6b74e0",
  'u-e': "#6cdfef",
  ar: "#f7bf31",
  ch: "#f878b5",
  oar: "#0671d5", // blue
  ear: "#11c684", // green
  ure: "#6cdfef",


  // Add more letters and their corresponding colors here
};

export default function App() {
  const [sound, setSound] = useState(null);

  const playSound = async (letter) => {
    const { sound } = await Audio.Sound.createAsync(alphabetSounds[letter]);
    setSound(sound);

    await sound.playAsync();
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
  };
  var getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.container}>
          <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain" style={styles.bgimage}>
      <View style={styles.subContainer}>
      <View style={styles.grid}>
        {Object.keys(alphabetSounds).map((letter) => (
          <TouchableOpacity
            key={letter}
            style={[styles.letterButton, { backgroundColor: alphabetColors[letter] }]}
            onPress={() => playSound(letter)}
            onLongPress={stopSound}
          >
            <Text style={styles.letterText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
      </ImageBackground>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f354b",
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
  },
  subContainer: {
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    paddingBottom: 2,
    width: 320,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  letterButton: {
    width: "22%",
    padding: 6,
    // height: 80,
    margin: 0,
    borderRadius: 16,
    aspectRatio: 1/1,
    display: "flex",
    backgroundColor: "#11c684",
    justifyContent: "center",
    alignItems: "center",
  },
  letterText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000"

  },
});
