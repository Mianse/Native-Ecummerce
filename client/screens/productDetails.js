import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { productsData } from '../data/productsData';
import Layout from '../components/Layout/Layout';

const ProductDetails = ({ route }) => {
    const [pDetails, setPDetails] = useState(null);
    const [qty,setQty] = useState(1)
    //HANDLE FUNCTION + -
    const handleAddQty =()=>{
        if(qty == 10){
            return alert("you cant add more than 10 quntities")
        }
        setQty((prev)=> prev+1 ) 
    }

    const handleRemoveQty =()=>{
        if(qty <= 1){
            return alert("you cant decrese less than 1 quantity")
        }
        setQty((prev)=> prev -1 ) 
    }
    const { params } = route;

    useEffect(() => {
        // Find product details
        const getProduct = productsData.find(p => p._id === params._id);
        setPDetails(getProduct);
    }, [params?._id]);

    return (
        <Layout>
            {pDetails && (
                <>
                    <Image source={{ uri: pDetails.imageUrl }} style={styles.image} />
                    <View style={styles.container}>
                        <Text style={styles.title}>{pDetails.name}</Text>
                        <Text style={styles.title}>Price: {pDetails.price}</Text>
                        <Text style={styles.desc}>Description: {pDetails.description}</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btnCart} disabled={pDetails.quantity <=0 }>
                            <Text style={styles.btnCartText}>{pDetails?.quantity > 0 ? "ADD TO CART" :  "OUT OF STOCK"}</Text>
                        </TouchableOpacity>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
                                <Text>-</Text>
                             </TouchableOpacity>
                             <Text style={styles.btQtyText}>{qty}</Text>
                             <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
                                <Text  style={styles.btQtyText}>+</Text>
                             </TouchableOpacity>
                        </View>
                    </View>
                </>
            )}
        </Layout>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%',
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
    },
    container: {
        marginVertical: 15,
        marginHorizontal: 10,
    },
    desc: {
        fontSize: 10,
        textTransform: "capitalize",
        marginHorizontal: 14,
        textAlign: "center",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    btnCart: {
        width: 180,
        backgroundColor: "#000000",
        borderRadius: 5,
        height: 40,
        justifyContent: "center"
    },
    btnCartText: {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },btnQty:{
        backgroundColor: 'lightgray',
        width: 40,
        alignItems: "center",
        marginHorizontal: 10,
    },
    btQtyText:{
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default ProductDetails;
