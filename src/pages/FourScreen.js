import React, { useState } from "react";
import { Text, Button, Alert, View, Image, TouchableOpacity } from "react-native";
import { VStack, HStack } from "react-native-flex-layout";
import { Box } from "../helper/Boxfunction";
import { Boxfour } from "../helper/Boxfunctionfour";
import checkWinnerFour from "../helper/checkWinnerFour";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Chosenbox } from "../helper/chosenbox";
export default function FourScreen({ navigation }) {
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
        return null; // Varsayılan olarak null döndürülebilir.
    }
  };

  const xyapfunciton = () => {
    setCurrentPlayer("X")
  }
  const eyapfunciton = () => {
    setCurrentPlayer("E")
  }

  const [currentPlayer, setCurrentPlayer] = useState("E");
  const [board, setBoard] = useState(Array(16).fill(null));
  const [highlighted, setHighLighted] = useState([]);
  const [winner, setWinner] = useState(null);

  const handlePress = (index) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const winnerline = checkWinnerFour(newBoard, 4); // Modify the checkWinner function to handle 4x4 grid
    const isDraw = newBoard.every((value) => value !== null);

    if (winnerline) {
      setHighLighted(winnerline);
      setWinner(currentPlayer);
      Alert.alert(`${currentPlayer} won!`);
    } else if (isDraw) {
      Alert.alert("It's a draw!");
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
    <View style={{ flex: 1, backgroundColor: "#ff9f1c" }}>
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
      <VStack
        center
        fill
        spacing={3}
        style={{ marginTop: hp(3) }}
      >
        {[0, 1, 2, 3].map((row) => (
          <HStack key={row} spacing={3} shouldWrapChildren>
            {[0, 1, 2, 3].map((col) => getBox(row * 4 + col))}
          </HStack>
        ))}

        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: 'center',
            // marginBottom: 20,
            flexDirection: "row",
            gap: wp(15)
          }}>

          <TouchableOpacity
            style={{ padding: 10, }}
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

        </View>
      </VStack>
    </View>

  );
}
