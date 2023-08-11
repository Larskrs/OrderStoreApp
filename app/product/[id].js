import React from 'react'
import { View, Linking, Text, Image, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native'
import HTMLView from 'react-native-htmlview';
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'
import { COLORS, icons, SIZES, translations } from '../../constants'
import useWoo from '../../hook/useWoo'
import { ScreenHeaderBtn } from '../../components'
import { checkImageURL } from '../../utils';
import styles from "../../components/product/product.style"
import Animated, {
    useSharedValue,
    withTiming,
    withDelay,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';

const ProductDetails = () =>  {

    const params = useSearchParams();
    const router = useRouter();

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      };

    const { data, isLoading, error, refetch } = useWoo(
        `products/${params.id}`, {})

        // console.log(JSON.stringify(data, null, 1))

        const indicatorStyle = useAnimatedStyle(() => {
            return {
              opacity: withTiming(isLoading ? 1 : 0, config),
              transform: [{scale:  withTiming(!isLoading ? 0 : 2, config)}],    
              display: withTiming(isLoading ? "flex" : 'none', config)
            //   transform: withTiming(!isLoading ? [{ rotate: '0deg' }] : [{ rotate: '180deg' }], config),
            };
          });
          const style = useAnimatedStyle(() => {
            return {
              opacity: withTiming(!isLoading ? 1 : 0, config),
              transform: [{translateY:  withTiming(!isLoading ? 0 : -100, config) }],
            };
          });

        const Screen = () => (
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
                        iconUrl={icons.search}
                        dimension={"60%"}
                        handlePress={() => {refetch()}}
                    />
                ),
                headerTitle: !isLoading ? data?.name : "loading..."
                    
            }}
        >
        
            
        
        </Stack.Screen>
        )
        

            const images = data.images
            const imageSrc = images?.[0]?.src

    return (
        <View>
            {/* <Animated.View style={[styles.loading,indicatorStyle]}><ActivityIndicator></ActivityIndicator></Animated.View> */}
            <Screen/>
           <Animated.ScrollView contentContainerStyle={[styles.container]} style={style}>

                <Animated.View style={[{backgroundColor: COLORS.lightWhite},styles.detailsContainer, style]}>
                    <View style={styles.between}>
                        <TouchableOpacity style={styles.button} onPress={() => {Linking.openURL(data?.permalink)}}><Text>Åpne Side</Text></TouchableOpacity> 
                        <TouchableOpacity style={[styles.button,{backgroundColor: COLORS.stockStatus(data.stock_status)}]}><Text style={{color: "#FFF"}}>{translations.StockSample(data.stock_status, data.stock_quantity)}</Text></TouchableOpacity>
                    </View>
                </Animated.View>
                <Animated.View style={style}>
                    <Image
                        style={{width: "100%", height: 300, borderRadius: SIZES.medium, backgroundColor: COLORS.white}}
                        resizeMode='cover'
                        source = {{ uri: imageSrc }}
                        // source={{ uri: data?.["jetpack-related-posts"]?.[0]?.img?.src }}
                    />
                </Animated.View>
                <View style={[styles.descriptionContainer]}>
                   <Text style={styles.productName}>{data.name}</Text>
                   <HTMLView
                       value={data?.description}
                       />
                </View>


            </Animated.ScrollView>
        </View>
    )
    
}


export default ProductDetails