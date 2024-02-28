import React, { useState } from "react";
import { Text, Alert, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { VStack, HStack } from "react-native-flex-layout";
import { Box } from "../helper/Boxfunction";
import { Boxfour } from "../helper/Boxfunctionfour";
import checkWinnerFour from "../helper/checkWinnerFour";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Chosenbox } from "../helper/chosenbox";
import { WinnerModal } from "../helper/WinnerModalfunction";
import { DrawModal } from "../helper/DrawModalFunction";
import { WinnerfourModal } from "../helper/WinnerfourModalfunction";

export default function FourScreen({ navigation }) {

  const [currentPlayer, setCurrentPlayer] = useState("E");
  const [board, setBoard] = useState(Array(16).fill(null));
  const [highlighted, setHighLighted] = useState([]);
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDrawVisible, setModalDrawVisible] = useState(false);


  const getBox = (index) => (
    <Boxfour
      value={board[index]}
      onPress={() => handlePress(index)}
      highlighted={highlighted.includes(index)}
      disabled={winner || board[index] ? true : false}
    />
  );
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
        return null;
    }
  };

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
    const winnerline = checkWinnerFour(newBoard, 4);
    const isDraw = newBoard.every((value) => value !== null);

    if (winnerline) {
      setHighLighted(winnerline);
      setWinner(currentPlayer);
      setModalVisible(true);
    } else if (isDraw) {
      setModalDrawVisible(true);
      handleReset();
    }
    else if (currentPlayer === "X") {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"))
    }
    else if (currentPlayer === "O") {
      setCurrentPlayer((prev) => (prev === "O" ? "X" : "O"))
    }
    else {
      setCurrentPlayer((prev) => (prev === "E" ? "M" : "E"));
    }
  };

  const handleReset = () => {
    setCurrentPlayer("E");
    setBoard(Array(16).fill(null));
    setHighLighted([]);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <WinnerfourModal modalVisible={modalVisible} setModalVisible={setModalVisible} currentPlayer={currentPlayer} />
      <DrawModal modalDrawVisible={modalDrawVisible} setModalDrawVisible={setModalDrawVisible} />
      <View style={styles.chosenContainer}>
        <Chosenbox funtionchosen={eyapfunciton} firstimage={require("../images/pamukkale2.png")} secondimage={require("../images/polis.png")} />
        <Chosenbox funtionchosen={xyapfunciton} firstimage={require("../images/asıkebap.png")} secondimage={require("../images/helva.png")} />
      </View>
      <View style={styles.playerImageContainer}>
        <Image style={styles.playerImage} source={renderPlayerImage()} />
      </View>
      <VStack center fill spacing={3} style={styles.boardContainer}>
        {[0, 1, 2, 3].map((row) => (
          <HStack key={row} spacing={3} shouldWrapChildren>
            {[0, 1, 2, 3].map((col) => getBox(row * 4 + col))}
          </HStack>
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
            <Image style={styles.buttonImage} source={require("../images/previous.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Image style={styles.buttonImage} source={require("../images/multimedia.png")} />
          </TouchableOpacity>
        </View>
      </VStack>
    </View>
  );
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
    backgroundColor: "red",
    height: hp(10),
    width: wp(20),
    alignSelf: "center",
    alignItems: "center",
    overflow: 'hidden',
    borderRadius: wp(5),
    marginTop: hp(3)
  },
  playerImage: {
    height: hp(10),
    width: wp(20),
  },
  boardContainer: {
    marginTop: hp(3)
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

