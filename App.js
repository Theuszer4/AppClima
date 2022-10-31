import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card';
import Footer from './src/components/Footer';


export default function App() {
  return (
    <View style={styles.body}>
    <ScrollView>
      <Header/>
        <Image style={styles.image} source={require('./assets/big-ben.png')}></Image>

        <View style={styles.cards}> 
          <Card nome="São Paulo"/>
          <Card nome="Rio de Janeiro"/>
          <Card nome="Minas Gerais"/>
        </View>
        <Footer />
       
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create ({
  body:{
      backgroundColor:'#1E202B',
  },
  image:{
    height: 280,
    marginBottom: -80,
  },
  cards:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})