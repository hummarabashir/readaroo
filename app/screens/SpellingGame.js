import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Alert } from "react-native";

const App = ({navigation}) => {

  const [questions, setQuestions] = useState([
    {
      image: require("../assets/images/quizimages/cat.png"),
      answer: ["c", "a", "t"],
      options: ["r", "a", "c", "v", "t", "m"],
    },
    {
      image: require("../assets/images/quizimages/bus.png"),
      answer: ["b", "u", "s"],
      options: ["p", "b", "s", "o", "e", "u"],
    },
    {
      image: require("../assets/images/quizimages/sun.png"),
      answer: ["s", "u", "n"],
      options: ["s", "g", "x", "n", "j", "u"],
    },
    {
      image: require("../assets/images/quizimages/bird.png"),
      answer: ["b", "i", "r", "d"],
      options: ["i", "d", "s", "r", "b", "u"],
    },
    {
      image: require("../assets/images/quizimages/bat.png"),
      answer: ["b", "a", "t"],
      options: ["a", "q", "t", "h", "b", "n"],
    },
    {
      image: require("../assets/images/quizimages/boat.png"),
      answer: ["b", "o", "a", "t"],
      options: ["c", "t", "o", "k", "b", "a"],
    },
    {
      image: require("../assets/images/quizimages/king.png"),
      answer: ["k", "i", "n", "g"],
      options: ["g", "i", "n", "k", "b", "o"],
    },
    {
      image: require("../assets/images/quizimages/fox.png"),
      answer: ["f", "o", "x"],
      options: ["u", "f", "n", "x", "m", "o"],
    },
    {
      image: require("../assets/images/quizimages/map.png"),
      answer: ["m", "a", "p"],
      options: ["p", "c", "a", "m", "i", "p"],
    },
    {
      image: require("../assets/images/quizimages/cow.png"),
      answer: ["c", "o", "w"],
      options: ["z", "c", "w", "e", "i", "o"],
    },
    {
      image: require("../assets/images/quizimages/tie.png"),
      answer: ["t", "i", "e"],
      options: ["d", "e", "y", "b", "t", "i"],
    },
    {
      image: require("../assets/images/quizimages/boy.png"),
      answer: ["b", "o", "y"],
      options: ["u", "c", "y", "k", "o", "b"],
    },
    {
      image: require("../assets/images/quizimages/star.png"),
      answer: ["s", "t", "a", "r"],
      options: ["a", "t", "e", "s", "h", "r"],
    },
    {
      image: require("../assets/images/quizimages/duck.png"),
      answer: ["d", "u", "c", "k"],
      options: ["k", "p", "c", "u", "v", "d"],
    },
    {
      image: require("../assets/images/quizimages/cake.png"),
      answer: ["c", "a", "k", "e"],
      options: ["a", "v", "c", "u", "e", "k"],
    },
  ]);

  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(null);

useEffect(() => {
  shuffleQuestions();
}, []);

const shuffleQuestions = () => {
  const shuffledData = [...questions].sort(() => Math.random() - 0.5);
  setQuestions(shuffledData);
  setCurrentQuestion(shuffledData[0]);
  setAnswer(shuffledData[0].answer);
  setSelectedLetters(Array(shuffledData[0].answer.length).fill(""));
};
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(false);
    const [answer, setAnswer] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);
    // const [selectedLetters, setSelectedLetters] = useState(
    //   Array(answer.length).fill("")
    // );
    const [selectedOption, setSelectedOption] = useState("");

    // if (currentQuestion && currentQuestion.answer) {
    //   setSelectedLetters(Array(currentQuestion.answer.length).fill(""));
    // }
    const handleOptionPress = (option) => {
      // if (currentQuestion && currentQuestion.answer) {
      //   const answer = currentQuestion.answer;
      //   setSelectedLetters(Array(currentQuestion.answer.length).fill(""));
        setSelectedOption(option);
        if (answer.includes(option)) {
          const index = answer.indexOf(option);
          const newSelectedLetters = [...selectedLetters];
          newSelectedLetters[index] = option;
          setSelectedLetters(newSelectedLetters);
        
      }
    };
    // const handleOptionPress = (option) => {
    //   setSelectedOption(option);
    //   if (answer.includes(option)) {
    //     const index = answer.indexOf(option);
    //     const newSelectedLetters = [...selectedLetters];
    //     newSelectedLetters[index] = option;
    //     setSelectedLetters(newSelectedLetters);
    //   }
    // };
  
    const handleNextPress = () => {
      // Logic to move to the next question
      if (selectedLetters.join("") === answer.join("")) {

      if ((currentQuestionIndex < questions.length - 1) && (selectedLetters.join("") === questions[currentQuestionIndex].answer.join(""))) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentQuestion(questions[currentQuestionIndex + 1]);
        setAnswer(questions[currentQuestionIndex + 1].answer);
        setSelectedLetters(Array(questions[currentQuestionIndex + 1].answer.length).fill(""));
      } else {
        // Logic to show the final score
        setShowScore(true);
        // Calculate and set the score
        const correctAnswers = questions.filter((question, index) => {
          return selectedLetters.join("") === question.answer.join("");
        });
        setScore(correctAnswers.length);
      }
    }
      else {
        Alert.alert("Play On!","Ready, Set, Fill! Let's Go!");
      }
    };
    const handleRestartButtonClick = () => {
      setSelectedOption(null);
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowScore(false);
      shuffleQuestions();
    };


  
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

      <View style={styles.container}>
            <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>
            {score ? (
        <View style={styles.scoreContainer}>
          <Image style={styles.boxImage} source={require('../assets/images/media/smilingbee.png')}/>
          <Text style={styles.scoreText}>Spelling Bee Champ! 🎉</Text>
          <TouchableOpacity
            style={styles.restartButton}
            onPress={handleRestartButtonClick}
          >
            <Text style={styles.restartButtonText}>Play again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Games')}
          >
            <Text style={styles.restartButtonText}>Back to Games</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
        {currentQuestion && (

<View style={styles.subContainer}>

              <View style={styles.imageContainer}>
              <Image source={currentQuestion.image} style={styles.image} />
      </View>
       
        <View style={styles.answerContainer}>
          {selectedLetters.map((letter, index) => (
              <View key={index} style={styles.answerOptions}>
            <Text key={index} style={styles.answerText}>
              {letter || "_"}
            </Text>
            </View>
          ))}
        </View>
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option && styles.selectedOptionButton,
              ]}
              onPress={() => handleOptionPress(option)}
              disabled={selectedLetters.includes(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.answerBlock}>
          <Text style={styles.handleAnswer}>
          {selectedLetters.join("") === answer.join("") ? 'Correct ✅'
            : ''}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.nextButton,
            selectedLetters.join("") === answer.join("") &&
              styles.enabledNextButton,
          ]}
          onPress={handleNextPress}
        >
          <Text  style={[
            styles.nextButtonText,
            selectedLetters.join("") === answer.join("") &&
              styles.enabledNextButton,
          ]}>Next</Text>
        </TouchableOpacity>
        </View>
        )}
</View>
           )}
        </ImageBackground>
      </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      //   flexWrap: "wrap",
        backgroundColor: "#1f354b",
        alignItems: "center",
        justifyContent: "center",
    },
    bgimage: {
      flex: 1,
      justifyContent: 'center',
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
    restartButton: {
      backgroundColor: "#f878b5",
      padding: 12,
      borderRadius: 8,
      width: 160,
      marginTop: 28
    },
    backButton: {
      backgroundColor: "#6cdfef",
      padding: 12,
      borderRadius: 8,
      width: 160,
      marginTop: 18
    },
    restartButtonText: {
      color: "#000",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center"
    },
    subContainer: {
      width: 350,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageContainer: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        height: 200,
        width: 200,
        backgroundColor: "#0671d5"
      },
      image: {
        // width: 300,
        // height: 300,
        resizeMode: "contain",
        padding: 1,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        width: "85%"
      },
    answerContainer: {
    //   flexDirection: "row",
    //   marginBottom: 20,
    display: "flex",
    gap: 10,
    flexDirection: "row",
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
    },
    answerOptions: {
        padding: 6,
        borderRadius: 16,
        flexDirection: "column",
        width: "28%",
        aspectRatio:1/1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f878b5"
    },
    answerText: {
      fontSize: 22,
      fontWeight: "bold",
      marginHorizontal: 5,
      color: '#000'
    },
    optionsContainer: {
        display: "flex",
        gap: 10,
        flexDirection: "row",
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        flexWrap: "wrap"
    },
    optionButton: {
      backgroundColor: "#f878b5",
      borderRadius: 16,
      padding: 6,
      margin: 0,
      aspectRatio: 1/1,
      flexDirection: "column",
      width: "28%",
      alignItems: "center",
        justifyContent: "center",
    },
    selectedOptionButton: {
      backgroundColor: "#6cdfef",
    },
    optionText: {
      fontSize: 22,
      fontWeight: "bold",
      color: '#000'
    },
    answerBlock: {
      height: 60
        },
        handleAnswer : {
          color: "#ffffff",
          padding: 18,
          fontSize: 14
        },
    nextButton: {
      backgroundColor: "#fff",
      borderRadius: 16,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      marginTop: 10
    },
    enabledNextButton: {
    //   opacity: 1,
      color: "#000"
    },
    nextButtonText: {
      fontWeight: "bold",
        fontSize: 16,
      color: "rgba(16, 16, 16, 0.3)",
    },
  });
  
  
  
  
  export default App;
