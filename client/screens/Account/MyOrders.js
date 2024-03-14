import React from 'react';
import { View, Text ,StyleSheet, ScrollView} from 'react-native';
import Layout from '../../components/Layout/Layout';
import { ordersData } from '../../data/ordersData';
import OrderItem from '../../components/components/Form/OrderItem';

const MyOrders = ({}) => {
  return (
    <Layout>
        <View style={styles.container}>
         <Text style={styles.heading}>My orders</Text>
         <ScrollView>
            {ordersData.map(order=>(
               <OrderItem key={order._id} order={order}/> 
            ))}
         </ScrollView>
        </View>
  

    </Layout>
  );
}

const styles = StyleSheet.create({

    container:{
        marginTop:20,

    },
    heading:{
        textAlign: "center",
        color: "gray",
        fontWeight: "bold",
        fontSize: 18,
    }
})

export default MyOrders;
