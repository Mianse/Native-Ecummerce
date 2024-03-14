import React from 'react';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import Layout from '../../components/Layout/Layout';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Dashboard = () => {
  return (
    <Layout>
        <View style={styles.main}>
            <Text style={styles.heading}>DashBoard</Text>
            <View style={styles.btnContainer}>

                <TouchableOpacity style={styles.btn}>
                <AntDesign  name="edit" style={styles.icon} />

                    <Text style={styles.btnText}>Manage products</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                <AntDesign  name="user" style={styles.icon} />

                    <Text style={styles.btnText}>Manage Users</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                <AntDesign  name="edit" style={styles.icon} />

                    <Text style={styles.btnText}>Manage Categories</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                <AntDesign  name="bars" style={styles.icon} />

                    <Text style={styles.btnText}>Manage Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                <AntDesign  name="info" style={styles.icon} />

                    <Text style={styles.btnText}>About App</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Layout>
  );
}

const  styles= StyleSheet.create({

    main:{
 backgroundColor: "lightgrey",
 height:"96%"
    },
    heading:{
        backgroundColor:"black",
        color: "white",
        textAlign: "center",
        padding: 10,
        fontSize: 20,
        margin: 10,
        borderRadius: 5,
        fontWeight: "bold"
    },btnContainer:{
    margin: 10,
    },btn:{
        flexDirection:  "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
        elevation: 10,
        marginBottom: 20,
        borderRadius: 5

    },icon:{
        fontSize: 25,
        marginRight: 20
    }
    ,btnText:{
        fontSize: 20
    }
})

export default Dashboard;
