import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const TextmodalHelper = ({ Texthere, style }) => {
    return (
        <Text style={[styles.text, style]}>
            {Texthere}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: wp(6),
        margin: wp(1.75),
        color: "#fff1e6"
    }
});
