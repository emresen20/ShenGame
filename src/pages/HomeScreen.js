import React from "react";
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