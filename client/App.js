import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About'
import ProductDetails from './screens/productDetails';
import Cart from './screens/cart';
//routes
const stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <stack.Navigator >
          <stack.Screen name="Home" component={Home} options={{
            headerShown: false
          }}/>
          <stack.Screen name="mobile" component={About} />
          <stack.Screen name="productDetails" component={ProductDetails} />
          <stack.Screen name="cart" component={Cart} />


        </stack.Navigator>
    </NavigationContainer>
   
  );
}


