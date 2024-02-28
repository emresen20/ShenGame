import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export function Chosenbox({ funtionchosen, firstimage, secondimage }) {
    return (
        <TouchableOpacity
            onPress={funtionchosen}
            style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={firstimage} />
            </View>
            
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={secondimage} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(39),
        height: hp(9),
        backgroundColor: "#cbf3f0",
        marginTop: hp(3),
        borderRadius: wp(5),
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    imageContainer: {
        borderRadius: wp(1),
        overflow: 'hidden'
    },
    image: {
        width: wp(15),
        height: hp(7)
    }
});
