import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, ScrollView } from "react-native";

const questions = [
    {
      id: 1,
      name: "octopus",
      image: require("../assets/images/quizimages/octopus.png"),
      options: ["o", "b", "d"],
      correctOption: "o",
    },
    {
      id: 2,
      name: "Igloo",
      image: require("../assets/images/quizimages/igloo.png"),
      options: ["p", "m", "i"],
      correctOption: "i",
    },
    {
      id: 3,
      name: "King",
      image: require("../assets/images/quizimages/king.png"),
      options: ["k", "h", "q"],
      correctOption: "k",
    },
    {
      id: 4,
      name: "Umbrella",
      image: require("../assets/images/quizimages/umbrella.png"),
      options: ["a", "u", "b"],
      correctOption: "u",
    },
    {
        id: 5,
        name: "Socks",
        image: require("../assets/images/quizimages/socks.png"),
        options: ["s", "k", "o"],
        correctOption: "s",
      },
      {
        id: 6,
        name: "Fox",
        image: require("../assets/images/quizimages/fox.png"),
        options: ["x", "o", "f"],
        correctOption: "f",
      },
  ];

const QuizScreen = ({ image, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.subContainer}>
      <View style={styles.imageContainer}>
      <Image
              style={styles.image}
              source={image}
            />
      </View>
      <View style={styles.optionsContainer}>

      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => {
            setSelectedOption(option);
            onSelect(option);
          }}
          style={{
            backgroundColor: selectedOption === option ? "#6cdfef" : "#f878b5",
        padding: 6,
        borderRadius: 16,
        flexDirection: "column",
        width: "28%",
        aspectRatio:1/1,
        alignItems: "center",
        justifyContent: "center"
          }}
        >
          <Text style={styles.optionButtonText}>{option}</Text>
        </TouchableOpacity>
      ))}
      </View>
      
    </View>
  );
};

const QuizApp = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [aniData, setAniData] = useState(0);

  const handleSelect = (option) => {
    setSelectedAnswer(option);
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
    setSelectedOpt(newSelectedOptions);
    setShowResult(true);
  };
  const handleRestartButtonClick = () => {
    setCurrentQuestionIndex(0);
    // setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setSelectedOpt(null);
    setShowResult(false);
    // const shuffledData = questions.sort(() => Math.random() - 0.5);
    // setAniData(shuffledData);

  };
  // useEffect(() => {
  //   const shuffledData = questions.sort(() => Math.random() - 0.5);
  //   setAniData(shuffledData);
  // }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowScore(true);
    } 
    // else {
    //   setCurrentQuestionIndex(currentQuestionIndex + 1);
    // }
    // setSelectedOpt(null);
    else if (selectedAnswer === questions[currentQuestionIndex].correctOption) {
      
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
    // setCurrentQuestion(currentQuestion + 1);
    setSelectedOpt(null);
  };

  const score = selectedOptions.filter(
    (option, index) => option === questions[index].correctOption
  ).length;

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>

    <View style={styles.container}>
          <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>

      {showScore ? (
        <View style={styles.scoreContainer}>
          {/* <Text style={styles.scoreText}>
            Your Score: {score}/{questions.length}
          </Text>
          {score === questions.length ? (
            <Text style={{ fontSize: 48 }}>😎</Text>
          ) : score >= questions.length / 2 ? (
            <Text style={{ fontSize: 48 }}>🙂</Text>
          ) : (
            <Text style={{ fontSize: 48 }}>😞</Text>
          )} */}
        <Image style={styles.boxImage} source={require('../assets/images/media/smilingbee.png')}/>
          <Text style={styles.scoreText}>Hive Five! 🎉</Text>
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
        <QuizScreen
          image={questions[currentQuestionIndex].image}
          options={questions[currentQuestionIndex].options}
          onSelect={handleSelect}
        />
      )}
      
      <View style={styles.subContainer}>
      <View style={styles.answerBlock}>
              {!showScore && showResult && (
           <Text style={styles.handleAnswer}>
             {selectedAnswer === questions[currentQuestionIndex].correctOption
               ? 'Correct ✅'
               : 'Try again ❌'}
           </Text>
         )}
         </View>
      {!showScore && (
              //    <TouchableOpacity
              //    style={[
              //      styles.nextButton,
              //      selectedOpt === null && styles.disabledButton,
              //    ]}
              //    onPress={handleNextQuestion}
              //    disabled={selectedOpt === null}
              //  >
              //    <Text style={[styles.nextButtonText, selectedOpt === null && styles.disabledButton]}>Next</Text>
              //  </TouchableOpacity>
         
              <TouchableOpacity
              style={[
                styles.nextButton,
                selectedAnswer === questions[currentQuestionIndex].correctOption
                  ? styles.nextButtonEnabled
                  : styles.disabledButton,
              ]}
              onPress={handleNextQuestion}
              disabled={!selectedAnswer}
            >
              <Text style={[styles.nextButtonText, selectedAnswer !== questions[currentQuestionIndex].correctOption && styles.disabledButton]}>Next</Text>
            </TouchableOpacity>
      )}
      </View>
      </ImageBackground>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    //   flexWrap: "wrap",
      backgroundColor: "#1f354b",
      alignItems: "center",
      justifyContent: "center",
    },
    subContainer: {
      width: 350, 
      justifyContent: 'center',
      alignItems: 'center'
    },
    bgimage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",

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
    scoreContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
      optionsContainer: {
        // flex: 1,
        display: "flex",
        gap: 10,
        flexDirection: "row",
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
      },
      optionButtonText: {
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
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
    restartButton: {
        backgroundColor: "#f878b5",
        padding: 12,
        borderRadius: 8,
        width: 160,
        marginTop: 18
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
});

export default QuizApp;
