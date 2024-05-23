import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";

const App = ({navigation}) => {

  const [questions, setQuestions] = useState([
  {
    word: "book",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/jam.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/book.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/watch.png") },
    ],
    correctOption: 2,
  },
  {
    word: "cow",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/moon.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/shoe.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/cow.png") },
    ],
    correctOption: 3,
  },
  {
    word: "bike",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/bike.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/cloud.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/bone.png") },
    ],
    correctOption: 1,
  },
  {
    word: "crayon",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/phone.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/crayon.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/cake.png") },
    ],
    correctOption: 2,
  },
  {
    word: "watch",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/bell.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/cow.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/watch.png") },
    ],
    correctOption: 3,
  },
  {
    word: "bird",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/bird.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/queen.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/phone.png") },
    ],
    correctOption: 1,
  },
  {
    word: "shoe",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/hat.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/shoe.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/dress.png") },
    ],
    correctOption: 2,
  },
  {
    word: "dog",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/ant.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/cow.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/dog.png") },
    ],
    correctOption: 3,
  },
  {
    word: "bell",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/bell.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/bin.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/guitar.png") },
    ],
    correctOption: 1,
  },
  {
    word: "sweet",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/phone.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/umbrella.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/sweet.png") },
    ],
    correctOption: 3,
  },
  {
    word: "moon",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/moon.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/hat.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/bike.png") },
    ],
    correctOption: 1,
  },
  {
    word: "queen",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/cloud.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/queen.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/leaf.png") },
    ],
    correctOption: 2,
  },
  {
    word: "chair",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/chair.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/sweet.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/book.png") },
    ],
    correctOption: 1,
  },
  {
    word: "witch",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/dress.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/bird.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/witch.png") },
    ],
    correctOption: 3,
  },
  {
    word: "hat",
    options: [
      { id: 1, image: require("../assets/images/quizimages/pairs/yacht.png") },
      { id: 2, image: require("../assets/images/quizimages/pairs/hat.png") },
      { id: 3, image: require("../assets/images/quizimages/pairs/van.png") },
    ],
    correctOption: 2,
  },
]);

const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
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
        <Image style={styles.boxImage} source={require('../assets/images/media/smilingbee.png')}/>
           <Text style={styles.scoreText}>Sweet Success! 🎉</Text>
 
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
          <View style= {styles.wordContainer}>
          <Text style={styles.word}>{currentQuestion.word}</Text>
          </View>
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
    marginBottom: 20,
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
