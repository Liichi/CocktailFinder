import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Index from './src/screens/index';
import AppNavigator from './src/navigation/Navigation';

export default function App() {
  return (
      <AppNavigator/>
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
