import { SafeAreaView, Text, TouchableOpacity,Button, Alert, View } from "react-native";
import { VStack, HStack, Flex } from "react-native-flex-layout";
import { useState } from "react"
import checkWinner from "./checkWinner";
function Box({ value, onPress, highlighted, disabled }) {


  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>


      <Flex
        style={{
          backgroundColor: highlighted ? "lightgreen" : "lightgray"
        }}
        center
        w={99}
        h={99}>
        <Text
          style={{
            fontSize: 60,
            fontWeight: "bold",
            color:"black"

          }}>{value}</Text>
      </Flex>
    </TouchableOpacity>
  )
}


export default function App() {

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

  const handlePress = (index) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const winnerline = checkWinner(newBoard);
    const isDraw = newBoard.every((value) => value !== null);
    if (winnerline){
      setHighLighted(winnerline)
      setWinner(currentPlayer)
      alert(`${currentPlayer} won!`)
    } 
    if (isDraw) {
      alert("It's a draw!");
      handleReset(); // Oyunu sıfırla 
    }
    else{
      
      setCurrentPlayer((prev) => (prev === "E" ? "M" : "E"));
      
    }   
    
  };
  const handleReset =() =>{
    setCurrentPlayer("E")
    setBoard(Array(9).fill(null));
    setHighLighted([]);
    setWinner(null);
  }
  return (
    <VStack
      center
      fill
      spacing={3}>
      <Text
        style={{
          fontSize: 36,
          fontWeight:"bold",
          color:"blue",
          marginTop:-30,
          paddingBottom:10

        }}>
        {currentPlayer} To Play</Text>
      <HStack spacing={3}
        shouldWrapChildren>
        {getBox(0)}
        {getBox(1)}
        {getBox(2)}
      </HStack>
      <HStack spacing={3}
        shouldWrapChildren>
        {getBox(3)}
        {getBox(4)}
        {getBox(5)}
      </HStack>

      <HStack spacing={3}
        shouldWrapChildren>
        {getBox(6)}
        {getBox(7)}
        {getBox(8)}
      </HStack>
      <View style={{marginTop:10}}>
        <Button
        onPress={handleReset} 
        title="Reset"/>
      </View>
    </VStack>

  )
}