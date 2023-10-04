import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components";
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

import COLORS from "./src/styles/theme";

const App: React.FC = () => {
    const [appReady, setAppReady] = useState(false);
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    });

    useEffect(() => {
        (async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
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
        <ThemeProvider theme={COLORS}>
            <StatusBar style="dark" translucent backgroundColor="transparent" />
            <View
                onLayout={onLayout}
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: COLORS.COLORS.ATTENTION_LIGHT9,
                }}
            ></View>
        </ThemeProvider>
    );
};

export default App;
