import React from 'react'
import { View, Linking, Text, Image, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'
import { COLORS, icons, SIZES } from '../../constants'
import useWoo from '../../hook/useWoo'
import { ScreenHeaderBtn } from '../../components'

const ProductDetails = () =>  {

    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useWoo(
        `products/${params.id}`, {})

        console.log(JSON.stringify(data, null, 1))

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            
                options={{
                    headerStyle: {  backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension={"60%"}
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension={"60%"}
                        />
                    ),
                    headerTitle: !isLoading ? data?.name : "loading..."
                        
                }}
            >

                

            </Stack.Screen>
            <ScrollView style={{columnGap: SIZES.medium,  padding: SIZES.medium}}>

                <Image
                    style={{width: "100%", height: 300, borderRadius: SIZES.medium, backgroundColor: COLORS.white}}
                    resizeMode='cover'
                    source={{ uri: data?.["jetpack-related-posts"]?.[0]?.img?.src }}
                />

                { !isLoading && <TouchableOpacity onPress={() => {Linking.openURL(data?.permalink)}}><Text>Åpne Side</Text></TouchableOpacity> }
                <Text>{}</Text>
                { !isLoading && <HTMLView
                    value={data?.description}
                />}


            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetails