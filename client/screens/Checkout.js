import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from '../components/Layout/Layout';

const Checkout = ({navigation}) => {
    const handleCOD =()=>{
        alert("Your Order has been placed succesfully")
    }
    const handleOnline =()=>{
        alert("you are redirecting to payment gateway")
        navigation.navigate( "payment" )
    }
  return (
    <Layout>

<View style={styles.contaner}>
      <Text style={styles.heading}>payment Details</Text>
      <Text style={styles.price}>total amount : 1001 

      </Text>
      <View style={styles.paymentCard} >
        <Text style={styles.paymentHeading}>Select payment method</Text>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
            <Text style={styles.paymentBtnText}>Cash on Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
            <Text  style={styles.paymentBtnText}> online (credit |  debit) card</Text>
        </TouchableOpacity>

      </View>
    </View>
    </Layout>
    
  );
}

const styles = StyleSheet.create({
    contaner:{
        alignItems: "center",
        justifyContent:"center",
       height: "90%"
    },heading:{
        fontSize: 25,
        fontWeight: "700",
        marginVertical: 30,

    },price:{
        fontSize: 20,
        color:'grey',
        marginBottom:20
    },paymentCard:{
        backgroundColor: "#ffffff",
        width: "90%",
        borderRadius: 10,
        padding: 30,
        marginVertical: 10, 
    },
    paymentHeading:{
        color: "grey",
        marginBottom: 10,
    },
    paymentBtn:{
        backgroundColor: "#000000",
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        marginVertical: 10,

    },
    paymentBtnText:{
        color: "white",
        textAlign: "center"
    }
})
export default Checkout;
