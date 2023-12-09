import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
        <View >
            <Text>Home</Text>
        </View>
    </Layout>
   
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