import React from "react";
<<<<<<< HEAD
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View, Modal, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState, useEffect } from "react"
import LottieView from 'lottie-react-native';
import { HomeModal } from "../helper/HomePageModal";
import { MYWebview } from "../helper/ModalWebViewfunction";
import { handlePrivacyPolicyPress } from "../helper/PrivacyPolicyLink";

export function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <HomeModal setModalVisible={setModalVisible} modalVisible={modalVisible} />
            <ImageBackground
                resizeMode="cover"
                style={styles.backgroundImage}
                source={require("../images/arkaplan.png")}
            >
                <View style={styles.overlay}>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={styles.questionButton}
                        >
                            <Text style={styles.questionButtonText}>?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handlePrivacyPolicyPress}
                            style={styles.privacyButton}
                        >
                            <Image style={styles.privacyIcon} source={require("../images/shield.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ThreeScreen')}
                            style={styles.gameButton}>
                            <Text style={styles.buttonText}>3X3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('FourScreen')}
                            style={[styles.gameButton, { backgroundColor: "#2ec4b6" }]}>
                            <Text style={styles.buttonText}>4X4</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        height: hp(100),
        width: wp(100),
        justifyContent: "center",
        alignItems: "center"
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.50)",
        height: hp(100),
        width: wp(100),
    },
    iconsContainer: {
        flexDirection: "row",
    },
    questionButton: {
        position: "absolute",
        right: wp(0),
        top: hp(0),
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    questionButtonText: {
        position: "absolute",
        fontSize: wp(10),
        fontWeight: "bold",
        color: "#ffa200"
    },
    privacyButton: {
        position: "absolute",
        left: wp(-1),
        top: hp(-2),
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    privacyIcon: {
        width: wp(7),
        height: hp(5)
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    gameButton: {
        width: wp(55),
        height: hp(15),
        backgroundColor: "#ffbf69",
        borderRadius: wp(8),
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: wp(20),
        color: "#fff1e6",
        fontWeight: "bold"
    }
});
=======
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export function HomeScreen({ navigation }) {
    return (
        <SafeAreaView
            style={{
                flex: 1,

            }}>
         <ImageBackground 
            resizeMode="cover"
            style={{
                height:hp(100),
                width:wp(100),
                justifyContent:"center",
                alignItems:"center"}}
                source={require("../images/arkaplan.png")}>
            
            <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.50)",  height:hp(100),
                width:wp(100),}}>
            <TouchableOpacity style={{
                position: "absolute",
                right:wp(0),
                top:hp(0),
                //backgroundColor:"yellow",
                padding:25,
                justifyContent:"center",
                alignItems:"center",
                borderRadius:8

            }}>
                <Text
                    style={{
                        position: "absolute",
                        fontSize:wp(10),
                        fontWeight:"bold",
                        color:"#ffa200"
                    }}>
                    ?
                </Text>
            </TouchableOpacity>

            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>


                <TouchableOpacity
                    onPress={() => navigation.navigate('ThreeScreen')}
                    style={{
                        width: wp(55),
                        height: hp(15),
                        backgroundColor: "#ffbf69",
                        borderRadius: wp(8),
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text
                        style={{
                            fontSize: wp(20),
                            color:"#fff1e6",
                            fontWeight:"bold"
                        }}>
                        3X3
                    </Text>
                </TouchableOpacity>

            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",


                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('FourScreen')}
                    style={{
                        width: wp(55),
                        height: hp(15),
                        backgroundColor: "#2ec4b6",
                        borderRadius: wp(8),
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text
                        style={{
                            fontSize: wp(20),
                            color:"#f7ede2",
                            fontWeight:"bold"
                        }}>
                        4X4
                    </Text>
                </TouchableOpacity>

            </View>
            </View>

         </ImageBackground>



        </SafeAreaView>
    )
}
>>>>>>> 2b069419f6d4c41619e7d9615ae4c9955bf412a7
