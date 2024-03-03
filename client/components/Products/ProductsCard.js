import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const ProductsCard = ({p}) => {
  const  navigation = useNavigation();

  //more details btn
  const handleMoreButton =(id)=>{
      navigation.navigate("productDetails",{_id: id});
      console.log(id)
  }
  // add to cart 
  const handleAddToCart =()=>{
    alert('add to cart')
  }
  return (
    <View>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{uri: p?.imageUrl}}/>
           <Text style={styles.cardTitle}>{p?.name}</Text>
           <Text style={styles.cardDesc}>{p?.description.substring(0,30)}....more</Text>
           <Text>{p?.price}</Text>
            <View style={styles.  BtnContainer}>
              <TouchableOpacity style={styles.btn} onPress={()=>{
                handleMoreButton(p?._id)
              }}>
                <Text style={styles.btnText}>
                  Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
                <Text style={styles.btnText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card:{
      borderWidth: 1,
      borderColor: 'lightgray',
      marginVertical: 5,
      marginHorizontal: 8,
      width: "45%",
      backgroundColor:"#fffff",
      justifyContent: "center"
    },
    cardImage:{
      height: 120,
      width: "100%",
      marginBottom: 10,

    },
    cardTitle:{
      fontSize : 10,
      fontWeight: "bold",
      marginBottom: 5,

    },
    cardDesc:{
        fontSize: 10,
        textAlign:  "left",

    },BtnContainer:{
        marginTop: 5,
        flexDirection: "row",
        justifyContent:  "space-between",
        alignItems: "center",
         
    },btn:{
      backgroundColor:  "black",
      height: 20,
      width: 75
    },btnCart:{
      backgroundColor:  "red",
      height: 20,
      width: 75
    },
    btnText:{
      color: "white",
      textAlign: "center",
      fontSize: 10,
      fontWeight: "bold"
    }
})

export default ProductsCard;
