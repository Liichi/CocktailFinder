import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Index from './src/screens/index';
import AppNavigator from './src/navigation/Navigation';

export default function App() {
  return (
	<AppNavigator/>
    /*<View style={styles.container}>
	
	<Text>dsadsadsa:D:D222</Text>
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
