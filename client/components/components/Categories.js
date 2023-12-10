import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet ,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { categoriesData} from '../../data/categoriesData';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
    const navigation =useNavigation()
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         <View style={styles.container}>
        {categoriesData ?.map((item)=>(
            <View key={item._id} >
                <TouchableOpacity style={styles.catContainer}
                onPress={()=>navigation.navigate(item.path)}
                >
                <FontAwesome  name={item.Icon} style={styles.catIcon}/>

                    <Text style={styles.catTittle}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        padding: 5,
        flexDirection: 'row',
    },catContainer:{
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },catIcon:{
        fontSize: 30,
        verticalAlign: 'top',

    },
    catTittle:{
        fontSize: 12,
    }
})
export default Categories;
