import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { Audio } from "expo-av";

const alphabetSounds = {
  'er/ir/ur': require("../assets/audio/phonics/advanced/ph_er-ir-ur.mp3"),
  'ce/ci/cy': require("../assets/audio/phonics/advanced/ph_ce-ci-cy.mp3"),
  'au/aw/all': require("../assets/audio/phonics/advanced/ph_au-aw-all.mp3"),
  'oi/oy': require("../assets/audio/phonics/advanced/ph_oi-oy.mp3"),
  'oo/ew': require("../assets/audio/phonics/advanced/ph_oo-ew.mp3"),
  'oo/u': require("../assets/audio/phonics/advanced/ph_oo-u.mp3"),
  'ge/gi/gy': require("../assets/audio/phonics/advanced/ph_ge-gi-gy.mp3"),
  'air/are': require("../assets/audio/phonics/advanced/ph_air-are.mp3"),
  'ow/ow/ou': require("../assets/audio/phonics/advanced/ph_ow-ow-ou.mp3"),
  // Add more letters and their corresponding sound files here
};

const alphabetColors = {
  'er/ir/ur': "#f878b5", // pink
  ear: "#11c684", // green
  ure: "#6cdfef",
  'ce/ci/cy': "#11c684",
  'au/aw/all': "#6b74e0", //purple
  'oi/oy': "#6cdfef", //yellow
  'oo/ew': "#f7bf31",
  'oo/u': "#0671d5",
  'ge/gi/gy': "#6cdfef", //lightblue
  'air/are': "#11c684",
  'ow/ow/ou': "#6b74e0", // blue



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
    marginTop: 12
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
    width: "46%",
    // height: 65,
    padding: 6,
    margin: 0,
    borderRadius: 16,
    aspectRatio: 2/1,
    display: "flex",
    backgroundColor: "#11c684",
    justifyContent: "center",
    alignItems: "center",
  },
  letterText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000"

  },
});
