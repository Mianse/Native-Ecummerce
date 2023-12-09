import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
}

export default Home;


const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
});