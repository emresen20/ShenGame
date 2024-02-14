import { SafeAreaView, Text, TouchableOpacity, Button, Alert, View, Image, } from "react-native";
import { VStack, HStack, Flex } from "react-native-flex-layout";
import { useState, useEffect } from "react"
import checkWinner from "../helper/checkWinner";
import { Box } from "../helper/Boxfunction";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Chosenbox } from "../helper/chosenbox";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ThreeScreen({ navigation }) {

  const getBox = (index) => (
    <Box
      value={board[index]}
      onPress={() => handlePress(index)}
      highlighted={highlighted.includes(index)}
      disabled={winner || board[index] ? true : false}
    />
  );
  const [currentPlayer, setCurrentPlayer] = useState("E");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [highlighted, setHighLighted] = useState([]);
  const [winner, setWinner] = useState(null);

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

  const handlePress = (index) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const winnerline = checkWinner(newBoard);
    const isDraw = newBoard.every((value) => value !== null);
    if (winnerline) {
      setHighLighted(winnerline)
      setWinner(currentPlayer)
      alert(`${currentPlayer} won!`)
    }
    if (isDraw) {
      alert("It's a draw!");
      handleReset(); // Oyunu sıfırla 
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
    setCurrentPlayer("E")
    setBoard(Array(9).fill(null));
    setHighLighted([]);
    setWinner(null);
  }
  return (

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

        </View>

      </VStack>
    </View>

  )
}