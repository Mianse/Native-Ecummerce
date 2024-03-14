import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderItem = ({order}) => {
  return (
    <View style={styles.container}>
        <View style = {styles.orderInfo} >
            <Text>Order ID :{order._id}</Text>
            <Text>Date:{order.date}</Text>

    </View>  

        <Text>Product Name: {order.productInfo.name}</Text>
        <Text>Product Price: {order.productInfo.price}</Text>
        <Text>Product qty: {order.productInfo.qty}</Text>

        <Text>Product Total amount: {order.totalAmount}</Text>
            <Text style={styles.status}>Order Status: {order.status}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    orderInfo:{
        flexDirection:  "row" , 
        justifyContent:"space-between",
        borderBottomWidth: 1,
        borderColor: "lightgrey",
        paddingBottom: 5,
    },status:{
        borderTopWidth: 1,
        fontWeight:  "bold",
        borderColor: "grey",
        padding: 5
    }
})

export default OrderItem;
