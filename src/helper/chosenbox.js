import { Image, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ThreeScreen from "../pages/ThreeScreen";
export function Chosenbox({ funtionchosen, firstimage, secondimage }) {
    return (
        <TouchableOpacity
            onPress={funtionchosen}
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
            

        </TouchableOpacity>
    )
}

