import React from 'react';
import {Image} from 'react-native' ; 
import { StatusBar } from 'expo-status-bar'; 
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/c5/37/d3/c537d363-6ec2-6ab6-2b02-f3ae468eb20e/886446008660.jpg/1200x1200bf-60.jpg" };
const imageAlbum = {uri: "https://is4-ssl.mzstatic.com/image/thumb/Music71/v4/c5/37/d3/c537d363-6ec2-6ab6-2b02-f3ae468eb20e/886446008660.jpg/1200x1200bf-60.jpg"};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image} blurRadius={7}>
      <View style={styles.imageContainer}>
        <Image source={imageAlbum}  
          style={styles.imageContained} /> 
      </View> 
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Momentos pendientes</Text>
        <Text style={styles.text}>Fernando delgadillo</Text>
      </View>
      
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 1,
    height: 350,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContained: {
    width: 350, 
    height: 350,
    borderRadius: 60,
  },
});

export default App;
