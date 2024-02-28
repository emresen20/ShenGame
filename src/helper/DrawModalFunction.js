import React from "react";
import { View, Alert, Image, Modal, StyleSheet ,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const DrawModal = ({ modalDrawVisible, setModalDrawVisible }) => {
    return (
        <Modal
            visible={modalDrawVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal kapatıldı.');
                setModalDrawVisible(false); // setModalDrawVisible fonksiyonu çağrılırken false parametresi geçirilir
            }}
        >
            <View style={styles.container}>
                <LottieView
                    style={styles.animation}
                    source={require('../assets/draw.json')}
                    autoPlay
                    loop
                />
                <TouchableOpacity onPress={() => setModalDrawVisible(false)}>
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
