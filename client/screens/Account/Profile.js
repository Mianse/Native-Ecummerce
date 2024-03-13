import React, {useState}from 'react';
import { View, Text, ScrollView,StyleSheet ,Image, Pressable, TouchableOpacity} from 'react-native';
import { userData } from '../../data/userData';
import Layout from '../../components/Layout/Layout';
import InputBox from '../../components/components/Form/inputBox';

const Profile = ({navigation}) => {
    const [email, setEmail] = useState(userData.email)
    const [profilePic, setProfilePic] = useState(userData.profilePic)

    const [password, setPassword] = useState(userData.password)
    const [address, setAddress] = useState(userData.address)
    const [city, setCity ] = useState(userData.city)
    const [country,setCountry] = useState(userData.country)
    const [contact, setContact] = useState(userData.contact)
    const [name,setName] = useState(userData.name);

    //handle update
    const handleUpdate=()=>{
        if(!email || !password || !name || !address || !city || !contact || !country){
            alert("Please enter all your fields");
        }else{alert("updated successfully")
        navigation.navigate('account');}
    }
  return (
    <Layout>
        <View styles={styles.container}>
         <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: profilePic}}/>
                <Pressable onPress={()=>alert("profile dialogue box")}>
                <Text style={{color:"red"}}>Update your profile</Text>
            </Pressable>
            <InputBox placeholder="enter your name" value={name} setValue={setName} autoComplete={"name"}/>
            <InputBox placeholder="enter your email" value={email} setValue={setEmail} autoComplete={"email"}/>
            <InputBox placeholder="enter your address" value={address} setValue={setAddress} autoComplete={"address-line1"}/>
            <InputBox placeholder="enter your password" value={password} setValue={setPassword}  autoComplete={"password"} secureTextEntry={true}/>
            <InputBox placeholder="enter your city" value={city} setValue={setCity} autoComplete={"country"}/>
            <InputBox placeholder="enter your country" value={country} setValue={setCountry} autoComplete={"country"}/>

            <InputBox placeholder="enter your contact" value={contact} setValue={setContact} autoComplete={"tel"}/>
    
            <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate}>
                <Text style={styles.btnUpdateTxt}>UPDATE YOUR PROFILE</Text>
            </TouchableOpacity>
            </View>
           
         </ScrollView>

    </View>
    </Layout>
    
  );
}

const styles = StyleSheet.create({
    container:{

        marginVertical: 20,

    },imageContainer:{
      justifyContent:"center",
      alignItems: "center"
    },image:{
        height: 100,
        width: "100%",
        resizeMode: "contain"
    },
    btnUpdate:{
        backgroundColor: "#000000",
        height: 40,
        marginTop: 10,
        borderRadius: 8,
        justifyContent: "center",
        marginHorizontal: 30

    },
    btnUpdateTxt:{
        color: "white",
        fontSize: 16,
        textAlign: "center"
    }


})

export default Profile;
