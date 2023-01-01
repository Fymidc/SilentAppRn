/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,

  StyleSheet,
 
  useColorScheme,
 
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/HomeScreen';



const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container} >
      <HomeScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container:{
  flex:1
 }
});

export default App;
