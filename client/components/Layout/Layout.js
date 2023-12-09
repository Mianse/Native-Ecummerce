import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { StatusBar } from 'expo-status-bar';

const Layout = ({children}) => {
  return (
    <>
    <StatusBar/>
    <Header/>
      <View>{children}</View>
    <Footer/>
    </>
  );
}

export default Layout;
