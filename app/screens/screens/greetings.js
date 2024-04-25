import React from 'react'
import { Text, StyleSheet } from 'react-native';

const Greetings = () => {
    let myDate = new Date();
    let hours= myDate.getHours();
    let greet;

    if (hours < 12)
        greet =  "morning";
    else if (hours >= 12 && hours <= 17)
        greet = "afternoon";
    else if (hours >= 17 && hours <= 24)
       greet = "evening";
    
    return <Text style={styles.greetings}>Good {greet}!</Text>
}

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