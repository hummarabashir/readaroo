import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Card = ({ alphabet, image }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <TouchableOpacity onPress={handleFlip}>
      <View
        style={flipped ? styles.cardContainerFlipped : styles.cardContainer}
      >
        {flipped ? (
          <>
            <Text>{alphabet}</Text>
            <Image source={image} style={styles.cardImage} />
          </>
        ) : (
          <Text>?</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  cardContainer: {
    width: 100,
    height: 150,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainerFlipped: {
    width: 100,
    height: 150,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: 80,
    height: 80,
  },
};

export default Card;
