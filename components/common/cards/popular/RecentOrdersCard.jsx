import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { COLORS, images, SIZES } from '../../../../constants'

import { checkImageURL } from '../../../../utils'

import styles from './recentOrdersCard.style'
import { FlatList } from 'react-native-gesture-handler'

import { useRouter } from 'expo-router'

const RecentOrdersCard = ({ order, selectedJob, handleCardPress }) => {

  const router = useRouter();

  return (
    <TouchableOpacity 
      style={[styles.container(selectedJob, order), {backgroundColor: COLORS.white, borderWidth: 0}]}
      onPress={() => handleCardPress(order)}
      > 
        <Text style={[{color: COLORS.primary}]}>{order.status}</Text>
        <FlatList
          data={order.line_items}
          horizontal
          keyExtractor={item => item?.id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          renderItem={({item}) =>
          (<TouchableOpacity style={[styles.logoContainer(selectedJob, order), {width: 75 ,height: 75}]}
          onPress={() => {router.push(`/product/${item.product_id}`)}} 
            >
                  <Image 
                    source={{ uri: item.image.src}}
                    resizeMode={"contain"}
                    style={styles.logoImage}
                    />
            </TouchableOpacity>)}
        />
      
        {order.shipping.company && <Text style={styles.companyName} numberOfLines={1}>{order.shipping.company}</Text> }
      <Text style={styles.companyName} numberOfLines={1}>{order.shipping.address_1}</Text>

      <FlatList
          data={order.line_items}
          horizontal
          keyExtractor={item => item?.id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          renderItem={({item}) => (
                <Text numberOfLines={1}>{item.name}</Text>
            )
          }
        />          
        
        <Text style={{color: COLORS.primary}}>{order.total}</Text>
    </TouchableOpacity>
  )
}

export default RecentOrdersCard