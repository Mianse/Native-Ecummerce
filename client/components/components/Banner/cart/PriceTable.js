import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const PriceTable = ({price,title}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{price}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 90,
        alignItems:  "center"
    }
})

export default PriceTable;
