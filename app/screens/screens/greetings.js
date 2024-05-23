import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GreetingContext = React.createContext();

const GreetingProvider = ({ children }) => {
  const currentHour = new Date().getHours();
  let greetingMessage = '';

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = 'Good Morning!';
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = 'Good Afternoon!';
  } else {
    greetingMessage = 'Good Evening!';
  }

        return (
          <GreetingContext.Provider value={greetingMessage}>
            {children}
          </GreetingContext.Provider>
        );
      };
      const GreetingMessage = () => {
        const greetingMsg = useContext(GreetingContext);
      
        return (
          <View>
            <Text style={styles.greetings}>{greetingMsg}</Text>
          </View>
        );
      };

const Greetings = () => {
  return (
    <GreetingProvider>
      <GreetingMessage />
    </GreetingProvider>
  );
};
export default Greetings 

var styles = StyleSheet.create({
    greetings: {
        fontSize: 14,
        color: '#ffffff',
        marginTop: 14,
        textAlign: 'center',
        marginBottom: 40
      }
});

