import React ,{ useState }from 'react';
import { View, Text ,StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { CartData } from '../data/CartData';
import PriceTable from '../components/components/Banner/cart/PriceTable';
import Layout from '../components/Layout/Layout';
import Cartitem from '../components/components/Banner/cart/Cartitem';
const Cart = ({navigation}) => {
  const [cartItems, setCartitems] = useState(CartData)

  return (
    <Layout>
      <Text style={styles.heading}>
        {
        cartItems?.length > 0 ? `you have ${cartItems.length} in your cart`: "oops your cart is empty"
        }
        </Text>
        {
          cartItems?.length > 0 && (
            <>
            <View>
              <ScrollView>
                {cartItems?.map((item)=>(
                       <Cartitem item={item} key={item._id}/>

                ))}

              </ScrollView>
              <PriceTable title={"price"}  price={999}/>
              <PriceTable title={"tax"}  price={1}/>
              <PriceTable title={"shipping"}  price={1}/>

              <View  style={styles.grandTotal}>

            <PriceTable title={"Grand Total"}  price={1001}/>

            </View>
            
                  <TouchableOpacity style={styles.btnCheckout}  onPress={()=>navigation.navigate('checkout')}>
                    <Text style={styles.btnCheckoutText} >CHECKOUT</Text>
                  </TouchableOpacity>

            </View>
            

           
            </>
          )
        }

    </Layout>
  );
}

const styles = StyleSheet.create({
  heading:{
    textAlign: "center",
    color: "green",
    marginTop: 20
  },
  grandTotal:{
    borderWidth: 1,
    borderColor: "ligtgray",
    backGroundColor:  "#ffffff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },btnCheckout:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: "center",
    height: 40,
    backgroundColor: "#000000",
    width: '90%',
    marginHorizontal: 20
  },btnCheckoutText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  }
})

export default Cart;
