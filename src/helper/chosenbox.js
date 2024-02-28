<<<<<<< HEAD
import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

=======
import { Image, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ThreeScreen from "../pages/ThreeScreen";
>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
export function Chosenbox({ funtionchosen, firstimage, secondimage }) {
    return (
        <TouchableOpacity
            onPress={funtionchosen}
<<<<<<< HEAD
            style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={firstimage} />
            </View>
            
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={secondimage} />
            </View>
=======
            style={{
                width: wp(39),
                height: hp(9),
                backgroundColor: "#cbf3f0",
                marginTop: hp(3),
                borderRadius: wp(5),
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",

            }}>
            <View style={{ borderRadius: wp(1), overflow: 'hidden' }}>
                <Image style={{ width: wp(15), height: hp(7) }} source={firstimage} />
            </View>

            {/* <Text   
            style={{
                fontSize:wp(10),
                alignSelf:"center",
                fontWeight:"bold"
                
                
            }}>
            VS
        </Text> */}
            <View  style={{ borderRadius: wp(1), overflow: 'hidden' }}>    
                <Image
                    style={{ width: wp(15), height: hp(7) }}
                    source={secondimage} />
            </View>
            

>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
        </TouchableOpacity>
    )
}

<<<<<<< HEAD
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
=======
>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
