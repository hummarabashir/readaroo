import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, Alert } from "react-native";
// import { CameraRoll } from '@react-native-camera-roll/camera-roll';

const QuizScreen = ({navigation}) => {
  const [animalData, setAnimalData] = useState([
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
    {
      id: 7,
      name: "Pen",
      image: require("../assets/images/quizimages/pen.png"),
      options: ["Caryon", "Pen", "Stick", "Brush"],
      correctOption: "Pen",
    },
    {
      id: 8,
      name: "Bat",
      image: require("../assets/images/quizimages/bat.png"),
      options: ["Bat", "Fish", "Eagle", "Crow"],
      correctOption: "Bat",
    },
    {
      id: 9,
      name: "Igloo",
      image: require("../assets/images/quizimages/igloo.png"),
      options: ["Snowman", "Dome", "Pyramid", "Igloo"],
      correctOption: "Igloo",
    },
    {
      id: 10,
      name: "King",
      image: require("../assets/images/quizimages/king.png"),
      options: ["Champion", "King", "Chief", "Queen"],
      correctOption: "King",
    },
    {
      id: 11,
      name: "Book",
      image: require("../assets/images/quizimages/book.png"),
      options: ["Book", "Phone", "Pizza", "Pillow"],
      correctOption: "Book",
    },
    {
      id: 12,
      name: "Tree",
      image: require("../assets/images/quizimages/tree.png"),
      options: ["Flower", "Shrub", "Plant", "Tree"],
      correctOption: "Tree",
    },
    {
      id: 13,
      name: "Fox",
      image: require("../assets/images/quizimages/fox.png"),
      options: ["Dog", "Fox", "Wolf", "Bear"],
      correctOption: "Fox",
    },
    {
      id: 14,
      name: "Umbrella",
      image: require("../assets/images/quizimages/umbrella.png"),
      options: ["Umbrella", "Shield", "Shelf", "Shade"],
      correctOption: "Umbrella",
    },
    {
      id: 15,
      name: "Queen",
      image: require("../assets/images/quizimages/queen.png"),
      options: ["King", "Model", "Queen", "Celebrity"],
      correctOption: "Queen",
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [aniData, setAniData] = useState(0);

  // const imageUrl = '../assets/images/quizimages/queen.png';

  // const ImageDownloadButton = ({ imageUrl }) => {
  //   const handleDownload = async () => {
  //     try {
  //       const res = await CameraRoll.save(imageUrl, 'photo');
  //       Alert.alert('Image Saved', 'Image saved successfully!');
  //     } catch (error) {
  //       Alert.alert('Error', 'Failed to save image. Please try again.');
  //     }
  //   };
  
  //   return (
  //     <View>
  //       <TouchableOpacity style={styles.restartButton} title="Download Image" onPress={handleDownload}>
  //         <Text style={styles.restartButtonText}>Download Badge</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  const handleAnswerButtonClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);

    if (selectedOption === currentQuestion.correctOption) {
      setSelectedOpt(selectedOption);
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if ((currentQuestionIndex === animalData.length - 1) && (selectedAnswer === currentQuestion.correctOption)) {
      setShowScore(true);
    }
    else if (selectedAnswer === currentQuestion.correctOption){
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQuestion(animalData[currentQuestionIndex + 1]);
    }
    // else {
    //   alert("Please fill all the blanks correctly!");
    // }
    setSelectedOpt(null);

  };

  const handleRestartButtonClick = () => {
    setCurrentQuestionIndex(0);
  setScore(0);
  setShowScore(false);
  setSelectedOpt(null);
  setSelectedAnswer(null);
  setShowResult(false);
  shuffleQuestions();
  };

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffledData = [...animalData].sort(() => Math.random() - 0.5);
    setAnimalData(shuffledData);
    setCurrentQuestion(shuffledData[0]);
  };

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
          {/* <ImageDownloadButton imageUrl={imageUrl} /> */}
        </View>
      ) : (
    <View>
      {currentQuestion && (
        <View style={styles.quizContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={currentQuestion.image}
            />
          </View>
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option) => (
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
    height: 240,
    width: 240,
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
    width: 240,
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

export default QuizScreen;
