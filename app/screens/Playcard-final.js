import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet, ImageBackground } from "react-native";
// import SoundPlayer from "react-native-sound-player";
// import { Ionicons } from '@expo/vector-icons';
// import * as Progress from 'react-native-progress';
import { Audio } from 'expo-av';


const FlashCardsApp = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [progress, setProgress] = useState(0);
  const [sound, setSound] = useState(null);


  const cards = [
    {
      image: require("../assets/images/quizimages/bird.png"),
      heading: "Bird",
      letterCase: "Bb",
      audio: require("../assets/audio/playcard/bird.mp3"),
      backgroundColor: "#6b74e0", // Add background color for Card 3
    },
    {
      image: require("../assets/images/quizimages/cake.png"),
      heading: "Cake",
      letterCase: "Cc",
      audio: require("../assets/audio/playcard/cake.mp3"),
      backgroundColor: "#11c684", // Add background color for Card 3
    },
    {
      image: require("../assets/images/quizimages/cat.png"),
      heading: "Cat",
      letterCase: "Cc",
      audio: require("../assets/audio/playcard/cat.mp3"),
      backgroundColor: "#f878b5", // Add background color for Card 1
    },
    {
      image: require("../assets/images/quizimages/bus.png"),
      heading: "Bus",
      letterCase: "Bb",
      audio: require("../assets/audio/playcard/bus.mp3"),
      backgroundColor: "#6b74e0", // Add background color for Card 2
    },
    {
        image: require("../assets/images/quizimages/duck.png"),
        heading: "Duck",
        letterCase: "Dd",
        audio: require("../assets/audio/playcard/duck.mp3"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/king.png"),
        heading: "King",
        letterCase: "Kk",
        audio: require("../assets/audio/playcard/king.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/leaf.png"),
        heading: "Leaf",
        letterCase: "Ll",
        audio: require("../assets/audio/playcard/leaf.mp3"),
        backgroundColor: "#6b74e0", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/igloo.png"),
        heading: "Igloo",
        letterCase: "Ii",
        audio: require("../assets/audio/playcard/igloo.mp3"),
        backgroundColor: "#11c684", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/map.png"),
        heading: "Map",
        letterCase: "Mm",
        audio: require("../assets/audio/playcard/map.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/octopus.png"),
        heading: "Octopus",
        letterCase: "Oo",
        audio: require("../assets/audio/playcard/octopus.mp3"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/socks.png"),
        heading: "Socks",
        letterCase: "Ss",
        audio: require("../assets/audio/playcard/socks.mp3"),
        backgroundColor: "#11c684", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/umbrella.png"),
        heading: "Umbrella",
        letterCase: "Uu",
        audio: require("../assets/audio/playcard/umbrella.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/queen.png"),
        heading: "Queen",
        letterCase: "Qq",
        audio: require("../assets/audio/playcard/queen.mp3"),
        backgroundColor: "#6b74e0", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/cow.png"),
        heading: "Cow",
        letterCase: "Cc",
        audio: require("../assets/audio/playcard/cow.mp3"),
        backgroundColor: "#11c684", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/tree.png"),
        heading: "Tree",
        letterCase: "Tt",
        audio: require("../assets/audio/playcard/tree.mp3"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/book.png"),
        heading: "Book",
        letterCase: "Bb",
        audio: require("../assets/audio/playcard/book.mp3"),
        backgroundColor: "#6b74e0", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/bat.png"),
        heading: "Bat",
        letterCase: "Bb",
        audio: require("../assets/audio/playcard/bat.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/fish.png"),
        heading: "Fish",
        letterCase: "Ff",
        audio: require("../assets/audio/playcard/fish.mp3"),
        backgroundColor: "#11c684", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/boat.png"),
        heading: "Boat",
        letterCase: "Bb",
        audio: require("../assets/audio/playcard/boat.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/fox.png"),
        heading: "Fox",
        letterCase: "Ff",
        audio: require("../assets/audio/playcard/fox.mp3"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/sun.png"),
        heading: "Sun",
        letterCase: "Ss",
        audio: require("../assets/audio/playcard/sun.mp3"),
        backgroundColor: "#6b74e0", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/sheep.png"),
        heading: "Sheep",
        letterCase: "Ss",
        audio: require("../assets/audio/playcard/sheep.mp3"),
        backgroundColor: "#11c684", // Add background color for Card 3
      },
  
    // Add more cards here
  ];
  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);
  const playAudio = async () => {
    try {
      const audio = cards[currentCardIndex].audio;

      const { sound } = await Audio.Sound.createAsync(audio);
      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.log('Error playing audio: ', error);
    }
  };

  const stopAudio = async () => {
    try {
      await sound.stopAsync();
      setIsPlaying(false);
    }
    catch (error) {
      console.log("Error stopping audio:", error);
    }
  };


  // const playAudio = async () => {
  //   try {
  //     const audioPath = cards[currentCardIndex].audio;
  //     await SoundPlayer.playSoundFile(audioPath, "m4a");

  //     setIsPlaying(true);
  //   } catch (error) {
  //     console.log("Error playing audio:", error);
  //   }
  // };

// const playAudio = async () => {
//     const sound = new Audio.Sound();

//     try {
//       // Get the audio path from the current card
//       const audioPath = cards[currentCardIndex].audio;

//       // Create a new sound object
//     //   const { sound } = await Audio.Sound.createAsync({ uri: audioPath });
//     await sound.loadAsync({
//         uri: audioPath,
//         shouldPlay: true,
//     });
//     await sound.playAsync();
//       // Set the sound object
//       setSound(sound);

//       // Play the audio
//       await sound.playAsync();
//     } catch (error) {
//       console.log('Error playing audio: ', error);
//     }
//   };

// const playAudio = async () => {
//     const sound = new Audio.Sound();
  
//     try {
//       // Get the audio path from the current card
//       const audioPath = cards[currentCardIndex].audio;
  
//       if (audioPath) {
//         // Create a new sound object
//         await sound.loadAsync({
//           uri: audioPath,
//           shouldPlay: true,
//         });
  
//         // Set the sound object
//         setSound(sound);
  
//         // Play the audio
//         await sound.playAsync();
//       } else {
//         console.log('Invalid audio path');
//       }
//     } catch (error) {
//       console.log('Error playing audio: ', error);
//     }
//   };
  
  

  const goToNextCard = () => {
    if(currentCardIndex === cards.length - 1) {
      // setProgress(0);
      setCurrentCardIndex(0);
    }
    else {
    setCurrentCardIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      // setProgress(newIndex / (cards.length - 1));
      return newIndex;
    });
  }
    // stopAudio();
  
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      // setProgress(newIndex / (cards.length - 1));
      return newIndex;
    });
    // stopAudio();
  };

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCurrentCardIndex(0);
    // stopAudio();
  };

  const currentCard = cards[currentCardIndex];

  useEffect(() => {
    shuffleCards();
  }, []);


  return (
<>
    {/* <Progress.Bar
    progress={progress}
    width={null}
    height={5}
    color="#6cdfef"
    borderColor="#1f354b"
    fill="#1f354b"
    backgroundColor="#1f354b"
    borderRadius= {0}
    style={styles.progressBar}
  /> */}
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>

      {/* <View style={[styles.card, { backgroundColor: currentCard.backgroundColor }]}> */}
      <View style={styles.quizContainer}>
      <View style={styles.bdayDecorContainer}>
        <View style={[styles.bdayPic, { backgroundColor: currentCard.backgroundColor }]}>
        <Image source={currentCard.image} style={styles.image} />
        </View>
        </View>
        <View style={styles.bdayBanner}>
        <Text style={styles.heading}>{currentCard.heading}</Text>
        </View>
        <View style={styles.bdayMessage}>
        <Text style={styles.bdayMessageText}>
        Fun Facts!!
        {/* {"\n"}  */}
        </Text>
        <Text style={styles.factsText}>
          Letter Case: {currentCard.letterCase}
        </Text>
        <Text style={styles.factsText}>
          Pronounication:
        </Text>
        <Text style={styles.factsText}>
          Phonetic Sound:
        </Text>
      </View>
      {/* </View> */}
      {/* <ProgressBar /> */}
      {/* <View style={styles.playView}>
      <Ionicons
      name="play"
      size={40}
      color="#6cdfef"
    />
    </View> */}
       <View style={styles.playView}>
      <Text 
        title={isPlaying ? "Play" : "Play"}
        onPress={isPlaying ? playAudio : playAudio}
     
        style={styles.playButton}
      > 
      {/* <Ionicons
      name={isPlaying ? "play" : "play"}
      size={40}
      color="#6cdfef"
    /> */}
    </Text>
    </View>
    
      <View style={styles.buttonContainer}>
        <Button
          title="Previous"
          onPress={goToPreviousCard}
          disabled={currentCardIndex === 0}
          // color= {currentCardIndex === 0 ? "gray" : "blue"}
          style={styles.navigationButton}
  // icon={<Ionicons name="arrowleft" size={24} color="pink"/>} 
  />
        <Button
           title={currentCardIndex === cards.length - 1 ? 'Start Over' : 'Next'}
          onPress={goToNextCard}
          // disabled={currentCardIndex === cards.length - 1}
          // icon={<Ionicons name="arrowright" size={24} color="white" />}
          style={styles.navigationButton}
        />
      </View>
      </View>
      </ImageBackground>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f354b",
    alignItems: "center",
    justifyContent: "center",
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
  },
  quizContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 350
  },
  progressBarContainer: {
    // marginTop: 10,
  },
  progressBar: {
    // borderRadius: 5,
  },
  
  card: {
    alignItems: "center",
    padding: 45,
  },
  // image: {
  //   width: 200,
  //   height: 200,
  //   marginBottom: 30,
  // },
  bdayPic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 280,
    height: 240,
    padding: 8,
    // backgroundColor: "white",
    borderRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "white",
    borderWidth: 6,
    borderColor: "white",
    shadowOpacity: 1,
    // transform: [{ rotate: "5deg" }, { translateX: 20 }, { translateY: 45 }],
    transform: [{ rotate: "3deg" }, { translateX: 5 }, { translateY: 35 }],

  },
  image: {
    width: 160,
    height: 160,
    resizeMode: "cover",
  },
  bdayDecorContainer: {
    position: "relative",
  },
  bdayBanner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    zIndex: 1,
   
    // transform: [{ rotate: "-5deg" }],
    marginVertical: 6,
  },
  heading: {
    backgroundColor: "#1f354b",
    paddingVertical: 12,
    paddingHorizontal: 40,
    fontWeight: "bold",
    fontSize: 32,
    color: "white",
    textTransform: "uppercase",
    flexGrow: 0
  },
  bdayMessage: {
    width: 280,
    marginTop: -15,
    padding: 24,
    fontSize: 18,
    lineHeight: 32,
    color: "#ffffff",
    backgroundColor: "#1f354b",
    background: 'repeating-linear-gradient(#F1EDE9, #F1EDE9 31px, #94ACD4 31px, #94ACD4 32px)',
    boxShadow: '5px 5px 15px rgba(0,0,0, .15)',
    marginBottom: 15,

  },
  factsText: {
     color: "white",
     paddingBottom: 5
  },
  bdayMessageText: {
    marginBottom: 10,
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "pink",
    fontSize: 20
  },
  playView: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#6cdfef",
    backgroundColor: "#0671d5",
    borderRadius: 10,
    marginTop: -30,
    padding: 4
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 90,
    marginTop: 50
  },
  navigationButton: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonDisabled : {
    color: "gray"
  }
});

export default FlashCardsApp;
