import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const MYWebview = () => {
    const [isReady, setIsReady] = useState(false);

    const onReady = () => {
        // YouTube player is ready
        setIsReady(true);
    };

    return (
        <View>
            {!isReady && (
                <View style={{ justifyContent:"center" }}>
                    <ActivityIndicator size={hp(10)} color="red" />
                </View>
            )}
            <YoutubePlayer
                height={hp(28)}
                play={true}
                videoId={'CtxHNtYttI4'}
                webViewStyle={{ flex: 1 }}
                onReady={onReady}
            />
        </View>
    );
};
