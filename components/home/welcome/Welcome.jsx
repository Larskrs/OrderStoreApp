import { useEffect, useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
 } from 'react-native'

import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { COLORS, icons, SIZES, translations } from "../../../constants"
import useWoo from '../../../hook/useWoo'

const jobTypes = ["Fullførte", "Behandler", "Kanselert"]

const Welcome = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const { data, isLoading, error, refetch } = useWoo(
    `products`, {search: searchTerm, per_page: 10},)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      refetch();
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Lars Kristian</Text>
        <Text style={styles.welcomeMessage}>Finn produkter og ordre.</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(val) => {setSearchTerm(val)}}
            placeholder="What are you looking for?"
          />
        </View>


        <TouchableOpacity style={styles.searchBtn} onPress={() => {refetch()}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
            />
        </TouchableOpacity>

      </View > 
      { isLoading || searchTerm != "" && 
      <View>
        <FlatList 
          contentContainerStyle={styles.searcResultContainer}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity 
                onPress={() => router.push(`/product/${item.id}`)}
                style={styles.searchItem}>
              <View>
                <Text numberOfLines={2} lineBreakMode='clip' style={{maxWidth: 300}}>{item.name}</Text>
                <Text style={styles.searchStorageStatus(item.stock_status)} numberOfLines={1}>{translations.StockSample(item.stock_status, item.stock_quantity)}</Text>
                {/* <Text numberOfLines={1}>{item.name}</Text> */}
              </View>
              <Image 
                resizeMode="cover"
                style={styles.searchItemImage}
                source={{uri: item.images[0].src}}/>
            </TouchableOpacity>
            )}
          /> 
        </View>
        }

      <View style={styles.tabsContainer}>
        <FlatList 

          data={jobTypes}
          renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item)
                  router.push(`/search/${item}`)
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={{columnGap: SIZES.small}}
            horizontal
        />
      </View>
    </View>
  )
}

export default Welcome