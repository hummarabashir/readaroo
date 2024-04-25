import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from "react-native";

const animalData = [
  {
    id: 1,
    name: "Sun",
    image: require("../assets/images/quizimages/sun.png"),
    options: ["Moon", "Sun", "Cloud", "Star"],
    correctOption: "Sun",
  },
  {
    id: 2,
    name: "Cat",
    image: require("../assets/images/quizimages/cat.png"),
    options: ["Dog", "Lion", "Cat", "Panda"],
    correctOption: "Cat",
  },
  {
    id: 3,
    name: "Bus",
    image: require("../assets/images/quizimages/bus.png"),
    options: ["Bus", "Car", "Truck", "Bike"],
    correctOption: "Bus",
  },
  {
    id: 4,
    name: "Map",
    image: require("../assets/images/quizimages/map.png"),
    options: ["Plan", "Chart", "Map", "Globe"],
    correctOption: "Map",
  },
  {
    id: 5,
    name: "Duck",
    image: require("../assets/images/quizimages/duck.png"),
    options: ["Parrot", "Duck", "Sparrow", "Dove"],
    correctOption: "Duck",
  },
  {
    id: 6,
    name: "Cake",
    image: require("../assets/images/quizimages/cake.png"),
    options: ["Biscuit", "Chocolate", "Cookie", "Cake"],
    correctOption: "Cake",
  },
];

export default function App({navigation}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [aniData, setAniData] = useState(0);


  const handleAnswerButtonClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);

    if (selectedOption === animalData[currentQuestion].correctOption) {
      setSelectedOpt(selectedOption);

      setScore(score + 1);

    }
    setShowResult(true);

    // if (currentQuestion === animalData.length - 1) {
    //   setShowScore(true);

    // }else{
    // }
  //   const nextQuestion = currentQuestion + 1;

  //   if (nextQuestion > animalData.length) {
  //     setShowScore(true);

  //     // setCurrentQuestion(nextQuestion);
  //   } else {
  //     // setShowScore(true);
  //   }
  };

  const handleNextQuestion = () => {
    if (currentQuestion === animalData.length - 1) {
      setShowScore(true);
    } else if (selectedAnswer === animalData[currentQuestion].correctOption) {
      
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
    // setCurrentQuestion(currentQuestion + 1);
    setSelectedOpt(null);
  };

  const handleRestartButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setSelectedOpt(null);
    setShowResult(false);
    // const shuffledData = animalData.sort(() => Math.random() - 0.5);
    // setAniData(shuffledData);

  };
  // useEffect(() => {
  //   const shuffledData = animalData.sort(() => Math.random() - 0.5);
  //   setAniData(shuffledData);
  // }, []);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>

    <View style={styles.container}>
          <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>
      {showScore ? (
        <View style={styles.scoreContainer}>
              {/* {score === animalData.length ? (
            <Text style={{ fontSize: 48 }}>😎</Text>
          ) : score >= animalData.length / 2 ? (
            <Text style={{ fontSize: 48 }}>🙂</Text>
          ) : (
            <Text style={{ fontSize: 48 }}>😞</Text>
          )}
          <Text style={styles.scoreText}>
            You scored {score} out of {animalData.length}!
          </Text> */}
         <Image style={styles.boxImage} source={require('../assets/images/media/smilingbee.png')}/>
          <Text style={styles.scoreText}>Bee-rilliant job! 🎉</Text>
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

        <View style={styles.quizContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={animalData[currentQuestion].image}
            />
          </View>
          <View style={styles.optionsContainer}>
            {animalData[currentQuestion].options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedAnswer === option && styles.selectedOptionButton,
                ]}
                onPress={() => handleAnswerButtonClick(option)}

              >
                <Text style={styles.optionButtonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* {showResult ? (
        <View>
          <Text style={styles.handleAnswer}>{selectedAnswer === animalData[currentQuestion].correctOption ? 'Correct ✅' : 'Try again ❌'}</Text>
          </View>
          ) : ('')} */}
          <View style={styles.answerBlock}>
           {showResult && (
        <Text style={styles.handleAnswer}>
          {selectedAnswer === animalData[currentQuestion].correctOption
            ? 'Correct ✅'
            : 'Try again ❌'}
        </Text>
      )}
      </View>
          {/* <TouchableOpacity
        style={[
          styles.nextButton,
          selectedAnswer === animalData[currentQuestion].correctOption && styles.disabledButton,
        ]}
        onPress={handleNextQuestion}
        disabled={selectedOpt === null}
      >
        <Text style={[styles.nextButtonText, selectedOpt === null && styles.disabledButton]}>Next</Text>
      </TouchableOpacity> */}
          <TouchableOpacity
        style={[
          styles.nextButton,
          selectedAnswer === animalData[currentQuestion].correctOption
            ? styles.nextButtonEnabled
            : styles.disabledButton,
        ]}
        onPress={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        <Text style={[styles.nextButtonText, selectedAnswer !== animalData[currentQuestion].correctOption && styles.disabledButton]}>Next</Text>
      </TouchableOpacity>
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
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    height: 200,
    width: 200,
    backgroundColor: "#0671d5"
  },
  image: {
    resizeMode: "contain",
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: "80%"
  },
  optionsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  optionButton: {
    backgroundColor: "#f878b5",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
  },
  optionButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedOptionButton: {
    backgroundColor: '#6cdfef',
  },
  answerBlock: {
height: 38
  },
  handleAnswer : {
    color: "#ffffff",
    padding: 4,
    fontSize: 14
  },
  nextButton: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    // marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
},
nextButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000"

},
  disabledButton: {
    backgroundColor: "#fff",
    color: "lightgray"
  },
});
