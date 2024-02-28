import React from "react";
import { View, Text, TouchableOpacity, Alert, Image, Modal, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

export const WinnerModal = ({ modalVisible, setModalVisible, currentPlayer }) => {
    const renderWinnerImage = () => {
        switch (currentPlayer) {
            case 'M':
                return require("../images/pamukkale2.png");
            case 'E':
                return require("../images/polis.png");
            case 'O':
                return require("../images/asıkebap.png");
            case 'X':
                return require("../images/helva.png");
            default:
                return null;
        }
    };

    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.winnerImage}
                        source={renderWinnerImage()}
                    />
                </View>
                <LottieView
                    style={styles.animation}
                    source={require('../assets/winner.json')}
                    autoPlay
                    loop
                />
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Image
                        style={styles.closeButton}
                        source={require("../images/close.png")}
                    />
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: wp(60),
        height: hp(40),
        overflow: 'hidden',
        margin: hp(2),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: wp(3)
    },
    winnerImage: {
        height: hp(40),
        width: wp(80),
    },
    animation: {
        flex: 1,
        width: wp(75),
        height: hp(75),
        marginBottom: hp(2)
    },
    closeButton: {
        width: wp(16),
        height: hp(8),
        marginBottom: hp(2)
    }
});
