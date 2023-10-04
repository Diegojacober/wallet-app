import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

const App: React.FC = () => {
    const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                await Font.loadAsync({
                    Poppins_300Light: Poppins_300Light,
                    Poppins_400Regular: Poppins_400Regular,
                    Poppins_500Medium: Poppins_500Medium,
                    Poppins_700Bold: Poppins_700Bold,
                    Poppins_800ExtraBold: Poppins_800ExtraBold,
                    DMSans_400Regular: DMSans_400Regular,
                    DMSerifDisplay_400Regular: DMSerifDisplay_400Regular,
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppReady(true);
            }
        })();
    }, []);

    const onLayout = useCallback(() => {
        if (appReady) {
            SplashScreen.hideAsync();
        }
    }, [appReady]);

    if (!appReady) {
        return null;
    }

    return (
        <View onLayout={onLayout}>
            <StatusBar backgroundColor={"#e97cf1"} />
        </View>
    );
};

export default App;
