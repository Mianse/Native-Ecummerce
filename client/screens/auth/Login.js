import React ,{useState}from 'react';
import { View, Text, TextInput,TouchableOpacity ,StyleSheet,Image} from 'react-native';
import InputBox from '../../components/components/Form/inputBox';
const Login = ({navigation}) => {
    const loginImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHLPdX_mVDYXuBQRYMV42yNkUQaZ_gE8o5Q&usqp=CAU"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    //login
    const handleLogin=()=>{
        if(!email || !password){
            alert("Please enter email or password fields");
        }else{alert("login successfully")
        navigation.navigate('Home');}
    }
  return (
    <View style={styles.container}>
        <Image source = {{uri:loginImage}} style= {styles.image}/>
        <InputBox placeholder={"enter your email"} autoComplete={"email"} value={email} setValue={setEmail}
        />
        <InputBox placeholder={"enter your passwprd"} secureTextEntry={true}  value={password} setValue={setPassword}/>
        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnTxt}>Login</Text>
      </TouchableOpacity>
      <Text>
        Do not have an account? <Text onPress={()=> navigation.navigate("register")} style={styles.link}>Register Here</Text>    

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
export default Login;
