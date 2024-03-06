import React,{useState} from 'react';
import { View, Text,StyleSheet, Image ,TouchableOpacity} from 'react-native';

const Cartitem = ({item}) => {
    //HANDLE FUNCTION + -
    const [qty,setQty] = useState(1)

    console.log(item);
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
  return (
    <View style={styles.container}>
        <Image source={{uri: item?.imageUrl}} style={styles.image}/>
        <View>
          <Text style={styles.name}>{item?.name}</Text>
          <Text  style={styles.name} >{item?.price} $</Text>
        </View>
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

  );
}

const styles = StyleSheet.create({
    container:{
       margin: 10,
       backgroundColor: "#ffffff" ,
       borderRadius: 10,
       flexDirection:  "row",
       justifyContent:"space-evenly",
       alignItems:"center"
    },image:{
        height:50,
        width: 50,
        resizeMode: "contain"
    },
    name:{
        fontSize: 10
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
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
})

export default Cartitem;
