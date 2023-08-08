import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native"
import { Stack, useRouter } from "expo-router"

import { COLORS, icons, images, SIZES } from "../constants"
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, WelcomeScreen } from "../components"

import { WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_CONSUMER_SECRET } from "@env"

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
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1, 
                        padding: SIZES.medium
                    }}
                >

                    <Welcome 
                    
                    />

                    {/* <Text>{WOOCOMMERCE_CONSUMER_KEY} {WOOCOMMERCE_CONSUMER_SECRET}</Text> */}

                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;