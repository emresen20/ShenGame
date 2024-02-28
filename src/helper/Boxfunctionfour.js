import { Image, TouchableOpacity } from "react-native";
import { Flex } from "react-native-flex-layout";
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export function Boxfour({ value, onPress, highlighted, disabled }) {
  let imageSource = null;

  if (value === 'E') {
    imageSource = require("../images/pamukkale2.png"); // E değeri için resim yolunu ayarlayın
  } else if (value === 'M') {
    imageSource = require('../images/polis.png'); // M değeri için resim yolunu ayarlayın
  }
  else if (value === 'X') {
    imageSource = require('../images/asıkebap.png'); // M değeri için resim yolunu ayarlayın
  }
  else if (value === 'O') {
    imageSource = require('../images/helva.png'); // M değeri için resim yolunu ayarlayın
  }

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Flex
        style={{
          backgroundColor: highlighted ? "#2ec4b6" : "#e5e5e5"
        }}
        center
        w={wp(24)}
        h={hp(13)}
      >
        {imageSource && <Image source={imageSource} style={{ width: wp(22), height: hp(12) }} />} 
        
      </Flex>
    </TouchableOpacity>
  );
}
