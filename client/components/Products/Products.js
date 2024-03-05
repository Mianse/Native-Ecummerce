import React from 'react';
import { View, Text } from 'react-native';
import { productsData } from '../../data/productsData';
import ProductsCard from './productsCard';
const Products = () => {
  return (
    <View>
        {productsData.map((p)=>(
            <ProductsCard key={p._id} p={p}/>
                    ))}
    </View>
  );
}

export default Products;
