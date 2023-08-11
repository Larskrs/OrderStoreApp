import Animated, {
    useSharedValue,
    withTiming,
    withDelay,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
  import { View, Button } from 'react-native';
  import { useState, useEffect } from 'react';
import useWoo from '../hook/useWoo';
  
  export default function AnimatedStyleUpdateExample() {
      
      const config = {
          duration: 500,
          easing: Easing.bezier(0.5, 0.01, 0, 1),
        };
        
        const { data, isLoading, error, refetch } = useWoo(
            `products`, {})
  
    const style = useAnimatedStyle(() => {
      return {
        opacity: withTiming(!isLoading ? 1 : 0, config),
      };
    });
  
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Animated.View
          style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
        />
        <Button
          title="toggle"
          onPress={async () => {
            
          }}
        />
      </View>
    );
  }
  

