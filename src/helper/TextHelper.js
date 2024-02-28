import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextmodalHelper } from './Textmodalhelper';

export const TextHelper = () => {
    return (
        <View style={styles.container}>
            <TextmodalHelper Texthere={" Oyunun Amacı 3 adet resmi"} />
            <TextmodalHelper style={styles.greenText} Texthere={"Satırda"} />
            <TextmodalHelper style={styles.blueText} Texthere={"Sütünda"} />
            <TextmodalHelper Texthere={"veya"} />
            <TextmodalHelper style={styles.redText} Texthere={"Çaprazda"} />
            <TextmodalHelper Texthere={"Yan Yana Getirmektir"} />
            <TextmodalHelper Texthere={"Nasıl oynanabileceğini üstteki"} />
            <TextmodalHelper Texthere={"videodan"} />
            <TextmodalHelper Texthere={"daha iyi anlayabilrisiniz"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        margin:hp(0.45)
    },
    greenText: {
        color: "#2ec4b6",
        fontSize: wp(7)
    },
    blueText: {
        color: "#001A23",
        fontSize: wp(7)
    },
    redText: {
        color: "#7D1128",
        fontSize: wp(7)
    }
});
