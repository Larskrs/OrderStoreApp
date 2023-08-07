import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, Switch, View, FlatList, ActivityIndicator, Image} from 'react-native';
import { BasicContainer } from "./components/BasicContainer"
import { global } from "./styles/global"
import { useState, useEffect } from "react"
export default function App() {

  const [amount, setAmount] = useState(0)

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={{width: 800, height: 200}} source={{uri: "http://aktuelt.tv/api/v1/files?fileId=e94b29cc-1b05-494e-8098-9fc495df0119.JPG"}}></Image>
      <Text style={[global.header1, {color: "#3bc"}]}>Plan B IT</Text>
      <BasicContainer>
        <Text style={global.paragraph3}>Dette er en test app lagd for å se om jeg klarer å lage apper via <Text style={global.highlight1}>React Native</Text></Text>
      </BasicContainer>
        <Text style={global.header2}><Text style={global.paragraph3}>Total: </Text><Text style={global.highlight1}>{amount}</Text></Text>
      <TouchableOpacity style={global.button} onPress={() => {setAmount(amount + 1 )}}>
        <Text style={global.paragraph1}>Press Here</Text>
      </TouchableOpacity>


      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <BasicContainer>

        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <BasicContainer>
              <Text style={global.paragraph3}>
                {item.title}, {item.releaseYear}
              </Text>
            </BasicContainer>
          )}
          />
          </BasicContainer>
        )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'top',
    gap: 8,
    padding: 4,
  },
});
