import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Layout from '../components/Layout/Layout';
import Categories from '../components/components/Categories';
import Banner from '../components/components/Banner/Banner';

const Home = () => {
  return (
    <Layout>
        <Categories/>
        <Banner/>
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