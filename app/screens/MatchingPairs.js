import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';

const MemoryMatchingPairsGame = ({navigation}) => {
    const [cards, setCards] = useState([
      { id: 1, data: 'S', value: require('../assets/images/quizimages/pairs/sun.png'), type: 'image', visible: false },
      { id: 2, data: 'R', value: 'r', type: 'letter', visible: false },
      { id: 3, data: 'F', value: require('../assets/images/quizimages/pairs/frog.png'), type: 'image', visible: false },
      { id: 4, data: 'H', value: 'h', type: 'letter', visible: false },
      { id: 5, data: 'C', value: require('../assets/images/quizimages/pairs/cat.png'), type: 'image', visible: false },
      { id: 6, data: 'A', value: 'a', type: 'letter', visible: false },
      { id: 7, data: 'C', value: 'c', type: 'letter', visible: false },
      { id: 8, data: 'R', value: require('../assets/images/quizimages/pairs/rat.png'), type: 'image', visible: false },
      { id: 9, data: 'F', value: 'f', type: 'letter', visible: false },
      { id: 10,  data: 'S', value: 's', type: 'letter', visible: false },
      { id: 11, data: 'H', value: require('../assets/images/quizimages/pairs/hat.png'), type: 'image', visible: false },
      { id: 12, data: 'A', value: require('../assets/images/quizimages/pairs/ant.png'), type: 'image', visible: false },
    ]);

  const [selectedCards, setSelectedCards] = useState([]);
  const [aniData, setAniData] = useState(0);

  const handleCardPress = (card) => {

    if (selectedCards.length >= 2) {
      return;
    }

    const updatedCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, visible: true };
      }
      return c;
    });

    setCards(updatedCards);
    setSelectedCards([...selectedCards, card]);
  };
  

  const checkForMatch = () => {

    const [card1, card2] = selectedCards;
    
    if (card1.data === card2.data) {
      const updatedCards = cards.map((c) => {
        if (c.id === card1.id || c.id === card2.id) {
          return { ...c, visible: true };
        }
        return c;
      });

      setCards(updatedCards);
      setSelectedCards([]);
    } else {
     setTimeout(() => {
        const updatedCards = cards.map((c) => {
          if (c.id === card1.id || c.id === card2.id) {
            return { ...c, visible: false };
          }
          return c;
        });

        setCards(updatedCards);
        setSelectedCards([]);
      }, 280);

    }
  };

  const checkForWin = () => {
    return cards.every((c) => c.visible);
  };

  const handleReset = () => {
    setCards(cards.map((c) => ({ ...c, visible: false })));
    setSelectedCards([]);
    const shuffledData = cards.sort(() => Math.random() - 0.5);
    setAniData(shuffledData);

  };
  useEffect(() => {
    const shuffledData = cards.sort(() => Math.random() - 0.5);
    setAniData(shuffledData);
  }, []);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/blob3.png')} resizeMode="contain"   style={styles.bgimage}>
      <View style={styles.cardsContainer}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              card.visible ? styles.cardVisible : styles.cardHidden,
            ]}
            onPress={() => handleCardPress(card)}
          >
          
            {card.visible && (

              <Text style={styles.cardText}>{card.type === 'letter' ? card.value : ''}</Text>
            )}
            {card.visible && (
              <Image
                source={card.type === 'image' ? card.value : null}
                style={styles.cardImage}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
      {selectedCards.length === 2 && checkForMatch()}
      {checkForWin() && (
        <View style={styles.winContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Play again</Text>
        </TouchableOpacity>
        <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate('Games')}
            >
              <Text style={styles.restartButtonText}>Back to Games</Text>
            </TouchableOpacity>
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
    justifyContent: 'center'
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
  },
  resetButton: {
    backgroundColor: '#f878b5',
    padding: 12,
    borderRadius: 8,
    width: 160,
    marginTop: 16
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    marginBottom: 10,
    // flex: 1,
  },
  card: {
    // width: 80,
    // height: 80,
    // margin: 10,
    // borderRadius: 10,
    // backgroundColor: '#f878b5',
    // alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f878b5',
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,    
  },
  cardVisible: {
    backgroundColor: '#6cdfef',

  },
  cardHidden: {
    backgroundColor: '#f878b5',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    // top: 28,
    color: "#000",
    textAlignVertical: "center",
    textAlign: "center",
    alignSelf : "center",
    alignItems: 'center',
    justifyContent: 'center',
    left: 20,
  },
  cardImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
// top: -10
  },

  winContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  winText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: "#11c684",
    padding: 12,
    borderRadius: 8,
    width: 160,
    marginTop: 16
  },
  restartButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default MemoryMatchingPairsGame;
