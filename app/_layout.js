import { Stack } from "expo-router"
import { useCallback, useState } from "react"
import { useFonts } from "expo-font"

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const Layout = () => {

    let [fontsLoaded] = useFonts({
        'DMRegular': require('../assets/fonts/DMSans-Regular.ttf'),
        'DMMedium': require('../assets/fonts/DMSans-Medium.ttf'),
        'DMBold': require('../assets/fonts/DMSans-Bold.ttf'),
      });

    
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;


    return ( <Stack onLayout={onLayoutRootView} >
        
    </Stack> )
        
}

export default Layout