<<<<<<< HEAD
import React, { useState } from "react";
import { Text, Alert, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { VStack, HStack } from "react-native-flex-layout";
import { Box } from "../helper/Boxfunction";
import checkWinner from "../helper/checkWinner";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Chosenbox } from "../helper/chosenbox";
import { WinnerModal } from "../helper/WinnerModalfunction";
import { DrawModal } from "../helper/DrawModalFunction";

export default function ThreeScreen({ navigation }) {

  const [currentPlayer, setCurrentPlayer] = useState("E");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [highlighted, setHighLighted] = useState([]);
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDrawVisible, setModalDrawVisible] = useState(false);

=======
import { SafeAreaView, Text, TouchableOpacity, Button, Alert, View, Image, } from "react-native";
import { VStack, HStack, Flex } from "react-native-flex-layout";
import { useState, useEffect } from "react"
import checkWinner from "../helper/checkWinner";
import { Box } from "../helper/Boxfunction";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Chosenbox } from "../helper/chosenbox";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ThreeScreen({ navigation }) {

>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
  const getBox = (index) => (
    <Box
      value={board[index]}
      onPress={() => handlePress(index)}
      highlighted={highlighted.includes(index)}
      disabled={winner || board[index] ? true : false}
    />
  );
<<<<<<< HEAD
=======
  const [currentPlayer, setCurrentPlayer] = useState("E");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [highlighted, setHighLighted] = useState([]);
  const [winner, setWinner] = useState(null);
>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7

  const renderPlayerImage = () => {
    switch (currentPlayer) {
      case 'E':
        return require("../images/pamukkale2.png");
      case 'M':
        return require("../images/polis.png");
      case 'X':
        return require("../images/asıkebap.png");
      case 'O':
        return require("../images/helva.png");
      default:
<<<<<<< HEAD
        return null;
    }
  };


=======
        return null; // Varsayılan olarak null döndürülebilir.
    }
  };

>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
  const xyapfunciton = () => {
    setCurrentPlayer("X")
  }
  const eyapfunciton = () => {
    setCurrentPlayer("E")
  }

  const handlePress = (index) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const winnerline = checkWinner(newBoard);
    const isDraw = newBoard.every((value) => value !== null);
    if (winnerline) {
      setHighLighted(winnerline)
      setWinner(currentPlayer)
<<<<<<< HEAD
      setModalVisible(true)

    }
    if (isDraw) {
      setModalDrawVisible(true);
      handleReset(); // Oyunu sıfırla 
    }
    else if (currentPlayer === "X") {
=======
      alert(`${currentPlayer} won!`)
    }
    if (isDraw) {
      alert("It's a draw!");
      handleReset(); // Oyunu sıfırla 
    }
    else if (currentPlayer === "X") {


>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"))
    }
    else if (currentPlayer === "O") {
      setCurrentPlayer((prev) => (prev === "O" ? "X" : "O"))
    }
    else {
      setCurrentPlayer((prev) => (prev === "E" ? "M" : "E"));
<<<<<<< HEAD
    }
=======

    }

>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
  };
  const handleReset = () => {
    setCurrentPlayer("E")
    setBoard(Array(9).fill(null));
    setHighLighted([]);
    setWinner(null);
  }
  return (

<<<<<<< HEAD
    <View style={styles.container}>
      <WinnerModal modalVisible={modalVisible} setModalVisible={setModalVisible} currentPlayer={currentPlayer}/>
      <DrawModal modalDrawVisible={modalDrawVisible} setModalDrawVisible={setModalDrawVisible}/>
      <View style={styles.chosenContainer}>
        <Chosenbox funtionchosen={eyapfunciton} firstimage={require("../images/pamukkale2.png")} secondimage={require("../images/polis.png")} />
        <Chosenbox funtionchosen={xyapfunciton} firstimage={require("../images/asıkebap.png")} secondimage={require("../images/helva.png")} />
      </View>
      <View style={styles.playerImageContainer}>
        <Image style={styles.playerImage} source={renderPlayerImage()} />
      </View>
      <VStack center fill spacing={3} style={styles.boardContainer}>
=======
    <View style={{ flex: 1,backgroundColor:"#ff9f1c" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: hp(1)
        }}>
        <Chosenbox funtionchosen={eyapfunciton} firstimage={require("../images/pamukkale2.png")} secondimage={require("../images/polis.png")} />
        <Chosenbox funtionchosen={xyapfunciton} firstimage={require("../images/asıkebap.png")} secondimage={require("../images/helva.png")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          // backgroundColor:"blue",
          marginTop: hp(1),
          alignItems: "center"
        }}>
        <View
          style={{
            backgroundColor: "red",
            height: hp(10),
            width: wp(20),
            alignSelf: "center",
            alignItems: "center",
            overflow: 'hidden',
            borderRadius: wp(5),
            marginTop: hp(3)
          }}>

          <Image
            style={{
              height: hp(10),
              width: wp(20),
            }} source={renderPlayerImage()} />
        </View>
        {/* <Text
         style={{
          justifyContent:"center",
          alignItems:"center",
          fontSize:wp(5),
          fontWeight:"bold",
          color:"black",
          marginLeft:wp(3)}}>
          Oynuyor
          </Text> */}
      </View>
      <VStack
        center
        fill
        spacing={3}
        style={{ marginTop: hp(6) }}
      >
>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
        <HStack spacing={3} shouldWrapChildren>
          {getBox(0)}
          {getBox(1)}
          {getBox(2)}
        </HStack>

        <HStack spacing={3} shouldWrapChildren>
          {getBox(3)}
          {getBox(4)}
          {getBox(5)}
        </HStack>

        <HStack spacing={3} shouldWrapChildren>
          {getBox(6)}
          {getBox(7)}
          {getBox(8)}
        </HStack>

<<<<<<< HEAD
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
            <Image style={styles.buttonImage} source={require("../images/previous.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Image style={styles.buttonImage} source={require("../images/multimedia.png")} />
          </TouchableOpacity>
=======
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: 'center',
            // marginBottom: 20,
            flexDirection: "row",
            gap:wp(15)
          }}>

          <TouchableOpacity
            style={{ padding: 10,  }}
            onPress={() => navigation.navigate('HomeScreen')}>

            <Image style={{ height: 50, width: 50 }}
              source={require("../images/previous.png")} />

          </TouchableOpacity>
          <TouchableOpacity onPress={handleReset}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require("../images/multimedia.png")}
            />
          </TouchableOpacity>

>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
        </View>

      </VStack>
    </View>

  )
<<<<<<< HEAD
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff9f1c"
  },
  chosenContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: hp(1)
  },
  playerImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(1),
    alignItems: "center"
  },
  playerImage: {
    backgroundColor: "red",
    height: hp(10),
    width: wp(20),
    alignSelf: "center",
    alignItems: "center",
    overflow: 'hidden',
    borderRadius: wp(5),
    marginTop: hp(3)
  },
  boardContainer: {
    marginTop: hp(6)
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: 'center',
    flexDirection: "row",
    gap: wp(15)
  },
  button: {
    padding: 10,
  },
  buttonImage: {
    height: 50,
    width: 50
  }
});

=======
}
>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
