import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
// import SoundPlayer from "react-native-sound-player";
// import { Ionicons } from '@expo/vector-icons';
import  * as Progress from 'react-native-progress';
import { Audio } from 'expo-av';


const FlashCardsApp = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sound, setSound] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);

  // https://dictionary.cambridge.org/us/pronunciation/english/bird

  const cards = [
    {
      image: require("../assets/images/quizimages/bird.png"),
      heading: "Bird",
      letterCase: "Bb",
      pronunciation: "/bɜːrd/",
      phonics: "buh-urd",
      vowels: "'i' and 'e'",
      twister: "Bobby the bird bakes berry bread.",
      audio: require("../assets/audio/playcard/bird.mp3"),
      backgroundColor: "#6b74e0", // Add background color for Card 3
    },
    {
      image: require("../assets/images/quizimages/cake.png"),
      heading: "Cake",
      letterCase: "Cc",
      pronunciation: "/keɪk/",
      phonics: "kayk",
      vowels: "a, e",
      twister: "Crafty chefs bake cakes beautifully.",
      audio: require("../assets/audio/playcard/cake.mp3"),
      backgroundColor: "#11c684", // Add background color for Card 3
    },
    {
      image: require("../assets/images/quizimages/cat.png"),
      heading: "Cat",
      letterCase: "Cc",
      pronunciation: "/kæt/",
      phonics: "Kat",
      vowels: " /æ/ (short 'a' sound)",
      twister: "Chatty cats chant cheerful tunes.",
      audio: require("../assets/audio/playcard/cat.mp3"),
      backgroundColor: "#f878b5", // Add background color for Card 1
    },
    {
      image: require("../assets/images/quizimages/bus.png"),
      heading: "Bus",
      letterCase: "Bb",
      pronunciation: "Buh-s",
      phonics: "/bʌs/",
      vowels: "U, pronounced as 'uh'",
      twister: "Busy buzzing bees bounce beside the big blue bus.",
      audio: require("../assets/audio/playcard/bus.mp3"),
      backgroundColor: "#6b74e0", // Add background color for Card 2
    },
    {
        image: require("../assets/images/quizimages/duck.png"),
        heading: "Duck",
        letterCase: "Dd",
        pronunciation: "/dʌk/",
        phonics: "duhk",
        vowels: "u",
        twister: "Quick, quirky ducks quack quietly.",
        audio: require("../assets/audio/playcard/duck.mp3"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/king.png"),
        heading: "King",
        letterCase: "Kk",
        pronunciation: "/kɪŋ/ ",
        phonics: "K-ing",
        vowels: "'i' and 'ɪ'",
        twister: "King Ken kicks quick kites.",
        audio: require("../assets/audio/playcard/king.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/leaf.png"),
        heading: "Leaf",
        letterCase: "Ll",
        pronunciation: "/liːf/",
        phonics: "Leef",
        vowels: "'e' and 'a'",
        twister: "Lazy lions lounge under leafy trees.",
        audio: require("../assets/audio/playcard/leaf.mp3"),
        backgroundColor: "#6b74e0", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/igloo.png"),
        heading: "Igloo",
        letterCase: "Ii",
        pronunciation: "ig-loo",
        phonics: "/ˈɪɡluː/",
        vowels: "'i' and 'o'.",
        twister: "Ivy's igloo is an icy igloo, too.",
        audio: require("../assets/audio/playcard/igloo.mp3"),
        backgroundColor: "#11c684", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/map.png"),
        heading: "Map",
        letterCase: "Mm",
        pronunciation: "/mæp/",
        phonics: "Muh-p",
        vowels: "a (short 'a' sound)",
        twister: "Munching monkeys make maps magically move.",
        audio: require("../assets/audio/playcard/map.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/octopus.png"),
        heading: "Octopus",
        letterCase: "Oo",
        pronunciation: "Ok-tuh-puhs",
        phonics: "/ˈɒk.tə.pʊs/",
        vowels: "'o', 'u'",
        twister: "Octopus at the zoo, boo, peekaboo!",
        audio: require("../assets/audio/playcard/octopus.mp3"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/socks.png"),
        heading: "Socks",
        letterCase: "Ss",
        pronunciation: "(Sah-ks)",
        phonics: "/sɒks/",
        vowels: "O (Oh)",
        twister: "Socks for soccer, socks for school.",
        audio: require("../assets/audio/playcard/socks.mp3"),
        backgroundColor: "#11c684", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/umbrella.png"),
        heading: "Umbrella",
        letterCase: "Uu",
        pronunciation: "um-brel-la",
        phonics: "/ʌmˈbrɛlə/",
        vowels: "u, e, a",
        twister: "Up high, umbrellas fly in the sky.",
        audio: require("../assets/audio/playcard/umbrella.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/queen.png"),
        heading: "Queen",
        letterCase: "Qq",
        pronunciation: "/kwiːn/",
        phonics: "kween",
        vowels: "ee",
        twister: "Queen quail is quiet",
        audio: require("../assets/audio/playcard/queen.mp3"),
        backgroundColor: "#6b74e0", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/cow.png"),
        heading: "Cow",
        letterCase: "Cc",
        pronunciation: "/kaʊ/",
        phonics: "K-ow",
        vowels: "O",
        twister: "Curious calf copies cow's call.",
        audio: require("../assets/audio/playcard/cow.mp3"),
        backgroundColor: "#11c684", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/tree.png"),
        heading: "Tree",
        letterCase: "Tt",
        pronunciation: "/triː/",
        phonics: "Tree (T-ree)",
        vowels: "ee (long e sound)",
        twister: "Twenty tiny trees twist in the wind.",
        audio: require("../assets/audio/playcard/tree.mp3"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/book.png"),
        heading: "Book",
        letterCase: "Bb",
        pronunciation: "buk",
        phonics: "/bʊk/",
        vowels: "'oo'",
        twister: "Look, Luke likes to lick lemon lollipops while reading a book.",
        audio: require("../assets/audio/playcard/book.mp3"),
        backgroundColor: "#6b74e0", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/bat.png"),
        heading: "Bat",
        letterCase: "Bb",
        pronunciation: "/bæt/",
        phonics: "b-at",
        vowels: "a",
        twister: "Big Bat Bit a Bright Blue Berry",
        audio: require("../assets/audio/playcard/bat.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/fish.png"),
        heading: "Fish",
        letterCase: "Ff",
        pronunciation: "/fɪʃ/",
        phonics: "f-ɪ-sh",
        vowels: "i",
        twister: "Five funny fish fry fresh fish.",
        audio: require("../assets/audio/playcard/fish.mp3"),
        backgroundColor: "#11c684", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/boat.png"),
        heading: "Boat",
        letterCase: "Bb",
        pronunciation: "/boʊt/",
        phonics: "b-oh-t",
        vowels: "o, a",
        twister: "Sally sells seashells by the seashore, sailing her boat.",
        audio: require("../assets/audio/playcard/boat.mp3"),
        backgroundColor: "#f878b5", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/fox.png"),
        heading: "Fox",
        letterCase: "Ff",
        pronunciation: "/fɒks/",
        phonics: "Fawks",
        vowels: "o",
        twister: "Fox fixes a feast for furry friends.",
        audio: require("../assets/audio/playcard/fox.mp3"),
        backgroundColor: "#6cdfef", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/sun.png"),
        heading: "Sun",
        letterCase: "Ss",
        pronunciation: "/sʌn/",
        phonics: "Suh-n",
        vowels: "u",
        twister: "Sammy the squirrel saw seven sunflowers in the sunny sun.",
        audio: require("../assets/audio/playcard/sun.mp3"),
        backgroundColor: "#6b74e0", // Add background color for Card 3
      },
      {
        image: require("../assets/images/quizimages/sheep.png"),
        heading: "Sheep",
        letterCase: "Ss",
        pronunciation: "/ʃiːp/",
        phonics: "Shee-p",
        vowels: "ee",
        twister: "Shy sheep show shiny shells.",
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
      const audio = shuffledCards[currentCardIndex].audio;

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
      setProgress(0);
      setCurrentCardIndex(0);

    }
    else {
    setCurrentCardIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setToggle(false);

      setProgress(newIndex / (cards.length - 1));
      return newIndex;
    });
  }
    // stopAudio();
  
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      setToggle(false);

      setProgress(newIndex / (cards.length - 1));
      return newIndex;
    });
    // stopAudio();
  };

  // const shuffleCards = () => {
  //   const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
  //   setCurrentCardIndex(0);
  // };


  useEffect(() => {
    const shuffleCards = () => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setShuffledCards(shuffled);
    };

    shuffleCards();
  }, []);
  const currentCard = shuffledCards[currentCardIndex];
  if (!currentCard) {
    return <Text>Error: Card Not Found</Text>;
  }

  const toggleDisplay = () => {
    setToggle(!toggle);
  };

  return (
<>
    <Progress.Bar
    progress={progress}
    width={null}
    height={5}
    color="#6cdfef"
    borderColor="#1f354b"
    fill="#1f354b"
    backgroundColor="#1f354b"
    borderRadius= {0}
    style={styles.progressBar}
  />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>

      {/* <View style={[styles.card, { backgroundColor: currentCard.backgroundColor }]}> */}
      <View style={styles.quizContainer} >
      <TouchableOpacity style={styles.toggleButton} onPress={toggleDisplay}>
          {/* <Text style={styles.toggleButtonText}>
            {toggle ? "Show Letters" : "Show Images"}
          </Text> */}
                            {/* <SvgXml xml={xml} style={styles.svg}/> */}
                            <Image source={require('../assets/images/svg.png')}
                   />
        </TouchableOpacity>
      <View style={styles.bdayDecorContainer}>
        <View style={[styles.bdayPic, { backgroundColor: currentCard.backgroundColor }]}>
        {toggle ? (
             <>
             <View style={styles.bdayMessage}>
        <Text style={styles.bdayMessageText}>
        DID YOU KNOW !!
        </Text>
        <Text style={styles.factsText}>
          Letter Case: <Text style={styles.bold}>{currentCard.letterCase}</Text>
        </Text>
        <Text style={styles.factsText}>
          Upper Case: <Text style={styles.bold}>{currentCard.letterCase[0]}</Text>
        </Text>
        <Text style={styles.factsText}>
          Lower Case: <Text style={styles.bold}>{currentCard.letterCase[1]}</Text>
        </Text>
        <Text style={styles.factsText}>
          Example Word: <Text style={styles.bold}>{currentCard.heading}</Text>
        </Text>
        <Text style={styles.factsText}>
          How to pronounce: <Text style={styles.bold}>{currentCard.pronunciation}</Text>
        </Text>
        <Text style={styles.factsText}>
          Phonetic Sound: <Text style={styles.bold}>{currentCard.phonics}</Text>
        </Text>
        <Text style={styles.factsText}>
          Vowels: <Text style={styles.bold}>{currentCard.vowels}</Text>
        </Text>
        <Text style={styles.tryText0}>
          Give it a Try
        </Text>
        <Text style={styles.tryText1}>
          Tongue Twister Challenge:
        </Text>
        <Text style={styles.factsText}>
           <Text style={styles.bold}>{currentCard.twister}</Text>
        </Text>
      </View> 
             </>
        ) : (
          <>
          {/* <View style={styles.playView}>
      <Text 
        title={isPlaying ? "Play" : "Play"}
        onPress={isPlaying ? playAudio : playAudio}
     
        style={styles.playButton}
      > 
    </Text>
    </View> */}
     <TouchableOpacity style={styles.playButton} onPress={isPlaying ? playAudio : playAudio}>
     {isPlaying ? <Image style={styles.volumeButton} source={require('../assets/images/media/volume.png')} /> : <Image style={styles.volumeButton} source={require('../assets/images/media/volume.png')} />}
      </TouchableOpacity>
          <View style={styles.bdayBanner}>
          <Text style={styles.headingTop}>{currentCard.letterCase}</Text>
          </View>
          <Image source={currentCard.image} style={styles.image} />
          <View style={styles.bdayBanner}>
          <Text style={styles.headingBottom}>{currentCard.heading}</Text>
          </View>
          </>
        )}
        </View>
        </View>
       
        {/* <View style={styles.bdayMessage}>
        <Text style={styles.bdayMessageText}>
        Fun Facts!!
        {/* {"\n"}  
        </Text>
        <Text style={styles.factsText}>
          Letter Case: {currentCard.letterCase}
        </Text>
        <Text style={styles.factsText}>
          pronunciation:
        </Text>
        <Text style={styles.factsText}>
          Phonetic Sound:
        </Text>
      </View> */}
      {/* </View> */}
      {/* <ProgressBar /> */}
      {/* <View style={styles.playView}>
      <Ionicons
      name="play"
      size={40}
      color="#6cdfef"
    />
    </View> */}
       {/* <View style={styles.playView}>
      <Text 
        title={isPlaying ? "Play" : "Play"}
        onPress={isPlaying ? playAudio : playAudio}
     
        style={styles.playButton}
      > 
      {/* <Ionicons
      name={isPlaying ? "play" : "play"}
      size={40}
      color="#6cdfef"
    /> 
    </Text>
    </View> */}
    
      <View style={styles.buttonContainer}>
        {/* <Button
          title="Previous"
          onPress={goToPreviousCard}
          disabled={currentCardIndex === 0}
          // color= {currentCardIndex === 0 ? "gray" : "blue"}
          style={styles.navigationButton}
  // icon={<Ionicons name="arrowleft" size={24} color="pink"/>} 
  /> */}
     <TouchableOpacity  onPress={goToPreviousCard} disabled={currentCardIndex === 0} style={styles.navigationButton} >
        <Image style={currentCardIndex === 0 ? styles.disabledPrevButton : styles.prevButton} source={require('../assets/images/media/arrow-left.png')} />
        {/* <Text style={currentCardIndex === 0 ? styles.disabledPrevButton : styles.prevButton}>Previous</Text> */}
        </TouchableOpacity>
        {/* <Button
           title={currentCardIndex === cards.length - 1 ? 'Start Over' : 'Next'}
          onPress={goToNextCard}
          // disabled={currentCardIndex === cards.length - 1}
          // icon={<Ionicons name="arrowright" size={24} color="white" />}
          style={styles.navigationButton}
        /> */}
        <TouchableOpacity  onPress={goToNextCard} style={styles.navigationButton} >
        {currentCardIndex === cards.length - 1 ? <Image style={styles.nextButton} source={require('../assets/images/media/arrow-up.png')} /> : <Image style={styles.nextButton} source={require('../assets/images/media/arrow-right.png')} />}
        </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
    </View>
    </ScrollView>
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
    width: 300
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
  toggleButton: {
    alignSelf: 'flex-end',
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    marginTop: 5,
    backgroundColor: "#1f354b",
    borderRadius: 8,
    shadowOffset: { width: 1, height: 1 },
    // shadowColor: "white",
    shadowOpacity: 1,
  },
  volumeButton: {
    width: 40,
    height: 40
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
    width: 320,
    height: 480,
    padding: 8,
    // backgroundColor: "white",
    borderRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "white",
    borderWidth: 6,
    borderColor: "white",
    shadowOpacity: 1,
    // transform: [{ rotate: "5deg" }, { translateX: 20 }, { translateY: 45 }],
    // transform: [{ rotate: "3deg" }, { translateX: 5 }, { translateY: 35 }],

  },
  image: {
    width: 160,
    height: 160,
    resizeMode: "cover",
  },
  bdayDecorContainer: {
    position: "relative",
    marginTop: 30
  },
  bdayBanner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    zIndex: 1,
   
    // transform: [{ rotate: "-5deg" }],
    marginVertical: 6,
  },
  headingTop: {
    // backgroundColor: "#1f354b",
    // paddingVertical: 12,
    // paddingHorizontal: 40,
    margin: 30,
    // fontWeight: "bold",
    fontSize: 72,
    color: "white",
    fontWeight: "bold",
    // textTransform: "uppercase",
    flexGrow: 0
  },
  headingBottom: {
    // backgroundColor: "#1f354b",
    // paddingVertical: 12,
    // paddingHorizontal: 40,
    margin: 36,
    fontSize: 26,
    color: "white",
    // fontWeight: "bold",
    // textTransform: "uppercase",
    flexGrow: 0
  },
  bdayMessage: {
    width: 300,
    padding: 24,
    fontSize: 18,
    lineHeight: 32,
    color: "#ffffff",
    marginBottom: 15,
    alignItems: 'center'

  },
  factsText: {
     color: "#000",
     paddingBottom: 8
  },
  tryText0: {
    fontWeight: 'bold',
    color: '#1f354b',
    paddingTop: 11
  },
  tryText1: {
    fontWeight: 'bold',
    color: '#1f354b',
    paddingBottom: 6
  },
  bold: {
    fontWeight: 'bold'
  },
  bdayMessageText: {
    marginBottom: 20,
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: "#1f354b",
    fontSize: 22
  },
  playView: {
    borderWidth: 2,
    borderColor: "#6cdfef",
    backgroundColor: "#0671d5",
    borderRadius: 10,
    padding: 4,
  },
  playButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundColor: 'lightblue',
    // borderRadius: 20,
    // padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "80%",
    marginBottom: 90,
    marginTop: 50
  },
  navigationButton: {
    flex: 1,
    // marginHorizontal: 40,
  },
  buttonDisabled : {
    color: "gray",
  },
  prevButton: {
    width: 40,
    // backgroundColor: '#f7bf31',
    // alignItems: 'center',
    // textAlign: 'center',
    // justifyContent: 'center',
    // padding: 6
    height: 40, 
    position: 'absolute',
    left: 0
  },
  disabledPrevButton: {
    width: 40,
    height: 40, 
    opacity: 0.2,
    position: 'absolute',
    left: 0
  },
  nextButton: {
    width: 40,
    height: 40, 
    position: 'absolute',
    right: 0
  },
});

export default FlashCardsApp;
