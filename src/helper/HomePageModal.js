const { View, Button, Modal, Text, TouchableOpacity, Image,StyleSheet, } = require("react-native");
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextHelper } from './TextHelper';
import { MYWebview } from './ModalWebViewfunction';
import { handlePrivacyPolicyPress } from './PrivacyPolicyLink';
export const HomeModal = ({ modalVisible, setModalVisible }) => {
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
            <View
                style={styles.container}
                >
                <View
                    style={styles.webviewcolor}>
                    <MYWebview />
                </View>
                <View
                    style={styles.contentContainer}>
                    <View style={styles.titleContainer}>
                        <Text
                            style={styles.titleText}>
                            Nasıl Oynanır?
                        </Text>
                    </View>
                    <TextHelper />
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Image
                            style={styles.closeImage}
                            source={require("../images/close.png")} />
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    webviewcolor: {
        backgroundColor: "#ff9f1c"
    },
    contentContainer: {
        flex: 1,
        backgroundColor: "#ff9f1c",
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontSize: wp(12),
        color: "#fff1e6",
    },
    closeButton: {
        justifyContent: "center",
        alignItems: "center"
    },
    closeImage: {
        width: wp(16),
        height: hp(8),
        marginBottom: hp(2)
    }
});