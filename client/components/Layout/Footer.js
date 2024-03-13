import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const Footer = () => {
  const route  = useRoute();
  const  navigation = useNavigation()
  return (
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.menuContainer} onPress ={()=>{
        alert("home")
      }}>
        <AntDesign style = {[styles.icon,route === "name" && styles.active]} name="home" />
        <Text style={[styles.iconText,route === "name" && styles.active]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.menuContainer} onPress ={()=>{
        alert("Notification page")
      }}>
        <AntDesign style = {[styles.icon,route === "notification" && styles.active]} name="bells" />
        <Text style={[styles.iconText,route === "notification" && styles.active]}>notifications</Text>
      </TouchableOpacity>  

      <TouchableOpacity style = {styles.menuContainer} onPress ={()=> navigation.navigate('cart')}>
        <AntDesign style = {[styles.icon,route === "cart page" && styles.active]} name="shoppingcart" />
        <Text style={[styles.iconText,route === "cart page" && styles.active]}>cart</Text>
      </TouchableOpacity>

    
      <TouchableOpacity style = {styles.menuContainer} onPress ={()=>{
        alert("account page")
      }}>
        <AntDesign style = {[styles.icon,route === "account" && styles.active]} name="user" />
        <Text style={[styles.iconText,route === "account" && styles.active]}>Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.menuContainer} onPress ={()=>{
        alert("logout successfully"), navigation.navigate("login")
      }}>
        <AntDesign style = {[styles.icon,route === "logout" && styles.active]} name="logout" />
        <Text style={[styles.iconText,route === "logout" && styles.active]}>Logout</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',
   justifyContent:  'space-between',
    paddingHorizontal: 10,
    marginBottom: 20, // Add marginBottom to create space below the Footer component
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    fontSize: 25,
    color: "#000000"
  },
  iconText: {
    color: "#000000",
    fontSize: 10,
  },active:{
    color: "blue"
  }
});

export default Footer;
