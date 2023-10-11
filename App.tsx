import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';

const App = () => {
  return (
    <View >
      <Text >Page content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;