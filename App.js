/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  Switch,
} from 'react-native';
// Pressable and Touchable can be used interchangeably

import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';

const App = () => {
  //const uri = dice1;
  const [uriOne, changeUriOne] = useState(dice1);
  const [uriTwo, changeUriTwo] = useState(dice1);
  const rollButtonPress = () => {
    let diceRollOne = Math.floor(Math.random() * 6) + 1;
    switch (diceRollOne) {
      case 1:
        changeUriOne(dice1);
        break;
      case 2:
        changeUriOne(dice2);
        break;
      case 3:
        changeUriOne(dice3);
        break;
      case 4:
        changeUriOne(dice4);
        break;
      case 5:
        changeUriOne(dice5);
        break;
      case 6:
        changeUriOne(dice6);
        break;
      default:
        changeUriOne(dice1);
        break;
    }
    let diceRollTwo = Math.floor(Math.random() * 6) + 1;
    switch (diceRollTwo) {
      case 1:
        changeUriTwo(dice1);
        break;
      case 2:
        changeUriTwo(dice2);
        break;
      case 3:
        changeUriTwo(dice3);
        break;
      case 4:
        changeUriTwo(dice4);
        break;
      case 5:
        changeUriTwo(dice5);
        break;
      case 6:
        changeUriTwo(dice6);
        break;
      default:
        changeUriTwo(dice1);
        break;
    }
  };
  const imageTapOne = () => {
    let diceRollOne = Math.floor(Math.random() * 6) + 1;
    switch (diceRollOne) {
      case 1:
        changeUriOne(dice1);
        break;
      case 2:
        changeUriOne(dice2);
        break;
      case 3:
        changeUriOne(dice3);
        break;
      case 4:
        changeUriOne(dice4);
        break;
      case 5:
        changeUriOne(dice5);
        break;
      case 6:
        changeUriOne(dice6);
        break;
      default:
        changeUriOne(dice1);
        break;
    }
  };
  const imageTapTwo = () => {
    let diceRollTwo = Math.floor(Math.random() * 6) + 1;
    switch (diceRollTwo) {
      case 1:
        changeUriTwo(dice1);
        break;
      case 2:
        changeUriTwo(dice2);
        break;
      case 3:
        changeUriTwo(dice3);
        break;
      case 4:
        changeUriTwo(dice4);
        break;
      case 5:
        changeUriTwo(dice5);
        break;
      case 6:
        changeUriTwo(dice6);
        break;
      default:
        changeUriTwo(dice1);
        break;
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={imageTapOne}>
          <Image source={uriOne} style={styles.image} />
        </Pressable>
        <Pressable onPress={imageTapTwo}>
          <Image source={uriTwo} style={styles.image} />
        </Pressable>
        <TouchableOpacity onPress={rollButtonPress}>
          <Text style={styles.tapButton}>Tap to Roll</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(225,100,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 120,
    height: 120,
  },

  tapButton: {
    fontSize: 25,
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    color: 'rgb(0,25,135)',
    borderColor: 'rgb(23,100,24)',
    borderRadius: 50,
    borderWidth: 3,
    backgroundColor: 'rgb(200,255,200)',
    fontWeight: 'bold',
  },
});
