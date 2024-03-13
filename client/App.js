import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About'
import ProductDetails from './screens/productDetails';
import Cart from './screens/cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Login from './screens/auth/Login';
import  Register from './screens/auth/Register';
//routes
const stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName='login'>
          <stack.Screen name="Home" component={Home} options={{
            headerShown: false
          }}/>
          <stack.Screen name="mobile" component={About} />
          <stack.Screen name="productDetails" component={ProductDetails} />
          <stack.Screen name="cart" component={Cart} />
          <stack.Screen name="checkout" component={Checkout} />
          <stack.Screen name="payment" component={Payment} />
          <stack.Screen name="login" options={{headerShown: false}} component={Login} />
          <stack.Screen name="register" options={{headerShown: false}} component={Register} />





        </stack.Navigator>
    </NavigationContainer>
   
  );
}


