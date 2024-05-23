import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { Audio } from 'expo-av';

const App = ({navigation}) => {

  const [questions, setQuestions] = useState([
    {
    word: "book",
    audio: require("../assets/audio/playcard/book.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/jam.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/book.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/watch.png") },
    ],
    correctOption: 2,
  },
  {
    word: "cow",
    audio: require("../assets/audio/playcard/cow.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/moon.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/shoe.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/cow.png") },
    ],
    correctOption: 3,
  },
  {
    word: "igloo",
    audio: require("../assets/audio/playcard/igloo.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/bike.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/igloo.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/bone.png") },
    ],
    correctOption: 2,
  },
  {
    word: "cake",
    audio: require("../assets/audio/playcard/cake.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/phone.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/crayon.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/cake.png") },
    ],
    correctOption: 3,
  },
  {
    word: "queen",
    audio: require("../assets/audio/playcard/queen.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/bell.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/queen.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/watch.png") },
    ],
    correctOption: 2,
  },
  {
    word: "bird",
    audio: require("../assets/audio/playcard/bird.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/bird.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/leaf.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/phone.png") },
    ],
    correctOption: 1,
  },
  {
    word: "map",
    audio: require("../assets/audio/playcard/map.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/umbrella.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/map.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/king.png") },
    ],
    correctOption: 2,
  },
  {
    word: "leaf",
    audio: require("../assets/audio/playcard/leaf.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/book.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/cake.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/leaf.png") },
    ],
    correctOption: 3,
  },
  {
    word: "sun",
    audio: require("../assets/audio/playcard/sun.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/sun.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/cat.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/zebra.png") },
    ],
    correctOption: 1,
  },
  {
    word: "duck",
    audio: require("../assets/audio/playcard/duck.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/rat.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/duck.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/sun.png") },
    ],
    correctOption: 2,
  },
  {
    word: "octopus",
    audio: require("../assets/audio/playcard/octopus.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/muffin.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/yacht.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/octopus.png") },
    ],
    correctOption: 2,
  },
  {
    word: "cat",
    audio: require("../assets/audio/playcard/cat.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/cat.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/sun.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/rat.png") },
    ],
    correctOption: 1,
  },
  {
    word: "boat",
    audio: require("../assets/audio/playcard/boat.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/cloud.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/bell.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/yacht.png") },
    ],
    correctOption: 3,
  },
  {
    word: "king",
    audio: require("../assets/audio/playcard/king.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/king.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/shoe.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/cake.png") },
    ],
    correctOption: 1,
  },
  {
    word: "Crayon",
    audio: require("../assets/audio/playcard/crayon.mp3"),
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/map.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/van.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/crayon.png") },
    ],
    correctOption: 3,
  },
]);

const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [aniData, setAniData] = useState(0);

  const handleOptionPress = (optionId) => {
    setSelectedAnswer(optionId);

    if (optionId === currentQuestion.correctOption) {
      setSelectedOption(optionId);

      setScore(score + 1);
      if (currentQuestion === questions.length - 1) {
        // All questions answered correctly
        // Show score and play again option
        // setCurrentQuestion(0);
      } else {
        // setCurrentQuestion(currentQuestion + 1);
      }
    }
    setShowResult(true);

  };

  const handleNextQuestion = () => {
    // setCurrentQuestion(currentQuestion + 1);
    // setSelectedOption(null);
    if ((currentQuestionIndex === questions.length - 1) && (selectedAnswer === currentQuestion.correctOption)) {
      setShowScore(true);
    }
    else if (selectedAnswer === currentQuestion.correctOption){
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
      }
    // if (selectedAnswer === questions[currentQuestion].correctOption) {
      
    //   setCurrentQuestion(currentQuestion + 1);
    //   setSelectedAnswer(null);
    //   setShowResult(false);
    // }
    setSelectedOption(null);
  };

  const handlePlayAgain = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowResult(false);
    shuffleQuestions();

  };

  const playAudio = async () => {
    try {
      const audio = currentQuestion.audio;

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

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffledData = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledData);
    setCurrentQuestion(shuffledData[0]);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>

    <View style={styles.container}>
          <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>
          {showScore ? (
                 <View style={styles.scoreContainer}>
                 {/* <Text style={{ fontSize: 80 }}>🎉</Text> */}
                 <Image style={styles.boxImage} source={require('../assets/images/media/smilingbee.png')}/>
                   <Text style={styles.scoreText}>Buzzing brains! 🎉</Text>
         
                   <TouchableOpacity
                     style={styles.playAgainButton}
                     onPress={handlePlayAgain}
                   >
                     <Text style={styles.playAgainButtonText}>Play Again</Text>
                   </TouchableOpacity>
                   <TouchableOpacity
                     style={styles.backButton}
                     onPress={() => navigation.navigate('Games')}
                   >
                     <Text style={styles.playAgainButtonText}>Back to Games</Text>
                   </TouchableOpacity>
                 </View>
      ) : (
        <View>
          {currentQuestion && (
                <View style={styles.center}>
                {/* <Text style={styles.word}>{questions[currentQuestion].word}</Text> */}
                <TouchableOpacity style={styles.playButton} onPress={isPlaying ? playAudio : playAudio}>
                <View style= {styles.wordContainer}>
           {isPlaying ? <Image style={styles.volumeButton} source={require('../assets/images/media/volume.png')} /> : <Image style={styles.volumeButton} source={require('../assets/images/media/volume.png')} />}
           </View>
            </TouchableOpacity>
                <View style={styles.optionsContainer}>
                  {currentQuestion.options.map((option) => (
                    <TouchableOpacity
                      key={option.id}
                     
                      onPress={() => {
                        setSelectedAnswer(option);
                        handleOptionPress(option.id)}}
                      style={[
                        styles.option,
                        selectedAnswer === option.id && styles.selectedOptionButton,
                      ]}
                    >
                      <Image source={option.image} style={styles.image} />
                    </TouchableOpacity>
                  ))}
                </View>
                {/* <TouchableOpacity
              style={[
                styles.nextButton,
                selectedOption === null && styles.disabledButton,
              ]}
              onPress={handleNextQuestion}
              disabled={selectedOption === null}
            >
              <Text style={[styles.nextButtonText, selectedOption === null && styles.disabledButton]}>Next</Text>
            </TouchableOpacity> */}
                <View style={styles.answerBlock}>
                 {showResult && (
              <Text style={styles.handleAnswer}>
                {selectedAnswer === currentQuestion.correctOption
                  ? 'Correct ✅'
                  : 'Try again ❌'}
              </Text>
            )}
            </View>
                <TouchableOpacity
              style={[
                styles.nextButton,
                selectedAnswer === currentQuestion.correctOption
                  ? styles.nextButtonEnabled
                  : styles.disabledButton,
              ]}
              onPress={handleNextQuestion}
              disabled={!selectedAnswer}
            >
              <Text style={[styles.nextButtonText, selectedAnswer !== currentQuestion.correctOption && styles.disabledButton]}>Next</Text>
            </TouchableOpacity>
              </View>
          )}
          </View>
           )}
      </ImageBackground>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
  //   flexWrap: "wrap",
    backgroundColor: "#1f354b",
    alignItems: "center",
    justifyContent: "center",
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
  },
  volumeButton: {
    width: 80,
    height: 80
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    width:350
  },
  scoreContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    marginBottom: 80

  },
  boxImage: {
    width: 120,
    height: 120,
  },
  scoreText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 16
  },
  wordContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#0671d5",
    width: 240,
    padding: 30
  },
  word: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff"
  },
  optionsContainer: {
    display: "flex",
    gap: 10,
    flexDirection: "row",
    width: 240,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  option: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    width: 70,
    height: 70,
    backgroundColor: "#6cdfef"
  },
  selectedOptionButton: {
    backgroundColor: '#f878b5',
  },
  image: {
    width: 50,
    height: 50,
    // width: "100%"
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  answerBlock: {
    height: 55
      },
      handleAnswer : {
        color: "#ffffff",
        padding: 16,
        fontSize: 14
      },
  nextButton: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    textAlign: "center"
},
nextButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: '#000'
},
  disabledButton: {
    backgroundColor: "#fff",
    color: "lightgray"
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
    // marginBottom: 20,
    color: "#fff",
    textAlign: "center"
  },
  playAgainButton: {
    backgroundColor: "#f878b5",
    padding: 12,
    borderRadius: 8,
    width: 160,
    marginTop: 18
  },
  playAgainButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  backButton: {
    backgroundColor: "#6cdfef",
    padding: 12,
    borderRadius: 8,
    width: 160,
    marginTop: 18
  },
});

export default App;
