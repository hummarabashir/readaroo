import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { Audio } from "expo-av";

const alphabetSounds = {
  s: require("../assets/audio/phonics/ph_s.mp3"),
  a: require("../assets/audio/phonics/ph_a.mp3"),
  t: require("../assets/audio/phonics/ph_t.mp3"),
  p: require("../assets/audio/phonics/ph_p.mp3"),
  i: require("../assets/audio/phonics/ph_i.mp3"),
  n: require("../assets/audio/phonics/ph_n.mp3"),
  m: require("../assets/audio/phonics/ph_m.mp3"),
  d: require("../assets/audio/phonics/ph_d.mp3"),
  g: require("../assets/audio/phonics/ph_g.mp3"),
  o: require("../assets/audio/phonics/ph_o.mp3"),
  c: require("../assets/audio/phonics/ph_c.mp3"),
  k: require("../assets/audio/phonics/ph_k.mp3"),
  j: require("../assets/audio/phonics/ph_j.mp3"),
  e: require("../assets/audio/phonics/ph_e.mp3"),
  u: require("../assets/audio/phonics/ph_u.mp3"),
  r: require("../assets/audio/phonics/ph_r.mp3"),
  h: require("../assets/audio/phonics/ph_h.mp3"),
  b: require("../assets/audio/phonics/ph_b.mp3"),
  f: require("../assets/audio/phonics/ph_f.mp3"),
  y: require("../assets/audio/phonics/ph_s.mp3"),
  l: require("../assets/audio/phonics/ph_l.mp3"),
  q: require("../assets/audio/phonics/ph_q.mp3"),
  s: require("../assets/audio/phonics/ph_s.mp3"),
  z: require("../assets/audio/phonics/ph_z.mp3"),
  x: require("../assets/audio/phonics/ph_x.mp3"),
  v: require("../assets/audio/phonics/ph_v.mp3"),
  w: require("../assets/audio/phonics/ph_w.mp3"),
  // Add more letters and their corresponding sound files here
};

const alphabetColors = {
  s: "#f878b5", // pink
  a: "#0671d5", // blue
  t: "#11c684", // green
  p: "#6cdfef",
  i: "#f7bf31",
  n: "#6b74e0", //purple
  m: "#f7bf31", //yellow
  d: "#0671d5",
  g: "#f878b5",
  o: "#6cdfef", //lightblue
  c: "#11c684",
  k: "#f878b5",
  j: "#6b74e0",
  e: "#0671d5",
  u: "#6cdfef",
  r: "#f7bf31",
  h: "#f878b5",
  b: "#11c684",
  f: "#0671d5",
  y: "#6b74e0",
  l: "#6cdfef",
  q: "#f7bf31",
  s: "#f878b5",
  z: "#11c684",
  x: "#0671d5",
  v: "#6b74e0",
  w: "#f878b5", 


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
