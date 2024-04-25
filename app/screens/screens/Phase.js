import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MemoryMatchingPairsGame = () => {
  const [cards, setCards] = useState([
    { id: 1, value: 'A', type: 'letter', visible: false },
    { id: 2, value: 'B', type: 'letter', visible: false },
    { id: 3, value: 'C', type: 'letter', visible: false },
    { id: 4, value: 'D', type: 'letter', visible: false },
    { id: 5, value: 'E', type: 'letter', visible: false },
    { id: 6, value: 'F', type: 'letter', visible: false },
    { id: 7, value: require('../assets/images/quizimages/cat.png'), type: 'image', visible: false },
    { id: 8, value: require('../assets/images/quizimages/bus.png'), type: 'image', visible: false },
    { id: 9, value: require('../assets/images/quizimages/socks.png'), type: 'image', visible: false },
    { id: 10, value: require('../assets/images/quizimages/duck.png'), type: 'image', visible: false },
    { id: 11, value: require('../assets/images/quizimages/leaf.png'), type: 'image', visible: false },
    { id: 12, value: require('../assets/images/quizimages/cat.png'), type: 'image', visible: false },
  ]);

  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardPress = (card) => {
    if (selectedCards.length === 1) {
      if (selectedCards[0].type !== card.type && selectedCards[0].value !== card.value) {
        setTimeout(() => {
          setCards((prevCards) => {
            const newCards = [...prevCards];
            newCards.find((c) => c.id === selectedCards[0].id).visible = false;
            newCards.find((c) => c.id === card.id).visible = false;
            return newCards;
          });
          setSelectedCards([]);
        }, 1000);
      } else {
        setSelectedCards([...selectedCards, card]);
      }
    } else {
      setSelectedCards([...selectedCards, card]);
    }

    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards.find((c) => c.id === card.id).visible = true;
      return newCards;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, card.visible && styles.visibleCard]}
            onPress={() => handleCardPress(card)}
            disabled={selectedCards.includes(card) || selectedCards.length === 2}
          >
            {card.visible && (
              <Text style={styles.cardText}>{card.type === 'letter' ? card.value : ''}</Text>
            )}
            {card.visible && card.type === 'image' && (
              <Image source={card.value} style={styles.cardImage} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  visibleCard: {
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 60,
    height: 60,
  },
});

export default MemoryMatchingPairsGame;