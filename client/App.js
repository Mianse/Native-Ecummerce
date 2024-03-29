import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from "react-redux"
import Home from './screens/Home';
import About from './screens/About'
import ProductDetails from './screens/productDetails';
import Cart from './screens/cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Login from './screens/auth/Login';
import  Register from './screens/auth/Register';
import Account from './screens/Account/Account';
import  Notification from "./screens/Account/Notification"
import Profile from './screens/Account/Profile';
import MyOrders from './screens/Account/MyOrders';
import Dashboard from './screens/Admin/Dashboard';
import store from './redux/features/store';
//routes
const stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <stack.Navigator initialRouteName='login'>
          <stack.Screen name="Home" component={Home} options={{
            headerShown: false
          }}/>
          <stack.Screen name="mobile" component={About} />
          <stack.Screen name="productDetails" component={ProductDetails} />
          <stack.Screen name="cart" component={Cart} />
          <stack.Screen name="checkout" component={Checkout} />
          <stack.Screen name="account" component={Account} />
          <stack.Screen name="notification" component={Notification} />
          <stack.Screen name="profile" component={Profile} />
          <stack.Screen name="orders" component={MyOrders} />
          <stack.Screen name="adminPanel" component={Dashboard} />


          <stack.Screen name="payment" component={Payment} />
          <stack.Screen name="login" options={{headerShown: false}} component={Login} />
          <stack.Screen name="register" options={{headerShown: false}} component={Register} />





        </stack.Navigator>
    </NavigationContainer>
    </Provider>
    
   
  );
}


