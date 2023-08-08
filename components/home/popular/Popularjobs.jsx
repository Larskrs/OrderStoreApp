import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Linking } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import RecentOrdersCard from '../../common/cards/popular/RecentOrdersCard'

import {WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_CONSUMER_SECRET} from '@env'

import useFetch from '../../../hook/useFetch'
import useWoo from '../../../hook/useWoo'

const Popularjobs = () => {

  const router = useRouter()
  
  const { data, isLoading, error } = useWoo
    ('orders', {})

    // console.log(JSON.stringify(data, null, 1))


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nye Ordre</Text>
        <TouchableOpacity><Text style={styles.headerBtn}>Vis Alt</Text></TouchableOpacity>
      </View>
      
      <View style={styles.cardsContainer}>
        { isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Obs! noe gikk galt... </Text>
        ) : (
          <FlatList 
            data={data}
            renderItem={({ item }) => (
              <RecentOrdersCard 
                order={item}
                handleCardPress={() => {
                  
                }}
              />
            )}
            keyExtractor={item => item?.id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
           />
        )}
      </View>
    </View>
  )
}

export default Popularjobs