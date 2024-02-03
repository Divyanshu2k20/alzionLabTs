import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './src/navigator/root-navigator';

function App(): React.JSX.Element {
  return (
    // <SafeAreaView style={styles.container}>
    <RootNavigator />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default App;
