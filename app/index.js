import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Linking } from "react-native"
import { Stack, useRouter } from "expo-router"

import { COLORS, icons, images, SIZES } from "../constants"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, WelcomeScreen } from "../components"

import { WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_CONSUMER_SECRET } from "@env"
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColors:COLORS.primary},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                        ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                        ),
                    headerTitle: "",
                }}
            />

            <StatusBar style="dark" />
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1, 
                        padding: SIZES.medium
                    }}
                >

                    <Welcome 
                    
                    />

                    <TouchableOpacity onPress={() => {router.push("/test")}}><Text>Åpne Test</Text></TouchableOpacity>

                    {/* <Text>{WOOCOMMERCE_CONSUMER_KEY} {WOOCOMMERCE_CONSUMER_SECRET}</Text> */}

                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;