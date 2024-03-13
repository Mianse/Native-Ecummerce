import React from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';

const InputBox = ({ value,setValue,autoComplete,placeholder,secureTextEntry, autoCorrect}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}  autoComplete={autoComplete} 
      placeholder={placeholder} 
      autoCorrect={false} 
      secureTextEntry={secureTextEntry}
    value={value}
    onChangeText={(text)=> setValue(text)}
       />
    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems:"center",
        marginVertical: 10,

    },input:{
        width: 300,
        backgroundColor: "#ffffff",
        height: 40,
        paddingLeft: 10,
        borderRadius: 10,
        color: "#000000",
        borderWidth: 1,
        borderColor: "grey"
    }
})

export default InputBox;
