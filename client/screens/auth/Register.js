import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import InputBox from '../../components/components/Form/inputBox';

const Register = ({navigation}) => {
    const loginImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHLPdX_mVDYXuBQRYMV42yNkUQaZ_gE8o5Q&usqp=CAU"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState("")
    const [city, setCity ] = useState("")
    const [country,setCountry] = useState("")
    const [contact, setContact] = useState("")
    const [confirmPassword,setConfirmPassword]= useState("")
    const [name,setName] = useState('');
    const handleRegister=()=>{
        if(!email || !password || !name){
            alert("Please enter name, email or password fields");
        }else{alert("Registered successfully")
        navigation.navigate('login');}
    }

  return (
    <View style={styles.container}>
        <Image source = {{uri:loginImage}} style= {styles.image}/>
        
         <InputBox placeholder={"enter your Full names"} value={name} setValue={setName}
        />
        <InputBox placeholder={"enter your email"}  autoComplete={"email"}  value={email} setValue={setEmail}/>

        <InputBox placeholder={"enter your city"} value={city} setValue={setCity}
        />
        <InputBox placeholder={"enter your Full country"} autoComplete={"country"}   value={country} setValue={setCountry}
        />

        <InputBox placeholder={"enter your address"}  autoComplete={"adress-line1"}  value={address} setValue={setAddress}
        />
        <InputBox placeholder={"enter your contact"} autoComplete={"tel"}   value={contact} setValue={setContact}
        />
        <InputBox placeholder={"enter your password"} secureTextEntry={true}  value={password} setValue={setPassword}/>
        <InputBox placeholder={"confirm your password"} secureTextEntry={true}  value={confirmPassword} setValue={setConfirmPassword}/>

        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
        <Text style={styles.loginBtnTxt}>Register</Text>
      </TouchableOpacity>
      <Text>
        Already have an account? <Text onPress={()=> navigation.navigate("login")} style={styles.link}>Login Here</Text>    

      </Text>
      
        </View>
      
    </View>
  );
  

}

const styles = StyleSheet.create({
    container:{
     justifyContent: "center",
     alignItems:"center",
     height: "100%",
 
    },image:{
     height: 200,
     width: "100%",
     resizeMode: "contain"
    },loginBtn:{
     backgroundColor: "#000000",
     width: 300,
     justifyContent: "center",
     height: 40,
     borderRadius: 10,
     marginVertical: 20,
    },
    btnContainer:{
     justifyContent: "center",
     alignItems: "center"
    }
    ,loginBtnTxt:{
     color: "white",
     textAlign: "center",
     fontSize: 18,
     textTransform: "uppercase",
     fontWeight: '500'
 
    },link:{
        color: "red"

    }

 })

export default Register;
