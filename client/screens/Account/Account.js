import React from 'react';
import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native';
import Layout from '../../components/Layout/Layout';
import { userData } from '../../data/userData';
import AntDesign from "react-native-vector-icons/AntDesign"

const Account = ({navigation}) => {
  return (
    <Layout>
    <View style={styles.container}>
        <Image source={{uri: userData.profilePic}} style={styles.image}/>
      <View style={{alignItems: "center",justifyContent: "center"}}>
        <Text style={styles.name}>Hi , <Text style={{color: "green"}}>{userData.name}   </Text>    </Text>
        <Text>{userData.email}</Text>
        <Text>{userData.contact}</Text>
        
      </View>
      <View style={styles.btnContainer}>
        <Text style={styles.heading}>Account settings</Text>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("profile",{id: userData._id})}>
            
          <AntDesign style={styles.btnText}  name="edit" />  
        <Text>
            edit profile
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("orders",{id: userData._id})}>
            
          <AntDesign style={styles.btnText}  name="bars" />  
        <Text>
           Ny Orders
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}  onPress={()=> navigation.navigate("notification")}>
            
          <AntDesign style={styles.btnText}  name="bells" />  
        <Text>
            notification
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("adminPanel",{id : userData._id})}>
            
          <AntDesign style={styles.btnText}  name="windows" />  
        <Text>
            AdminPanel
        </Text>
        </TouchableOpacity>
      </View>
    </View>
    </Layout>
    
  );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
        
    },image:{
       height: 100,
       width: "100%" ,
       resizeMode: "contain"
    },name:{
        marginTop: 10,
        fontSize: 35,
    },btnContainer:{
        backgroundColor: "white",
        padding:  10,
        marginVertical: 20,
        margin: 10,
        elevation: 5,
        borderRadius: 10,
        paddingBottom:  40,
    },heading:{
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom:10,
        textAlign: "center",
        borderBottomWidth: 1,
        borderColor: "gray"
    },
    
    btn:{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        
    },btnText:{
        marginRight: 10,
        fontSize: 15,
    }
        });
export default Account;
