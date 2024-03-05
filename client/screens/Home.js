import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Layout from '../components/Layout/Layout';
import Categories from '../components/components/Categories';
import Banner from '../components/components/Banner/Banner';
import Products from '../components/Products/Products';
import Header from '../components/Layout/Header';

const Home = () => {
  return (
    <Layout>
      <Header/>
        <Categories/>
        <Banner/>
        <Products/>
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