import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About'
//routes
const stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <stack.Navigator >
          <stack.Screen name="Home" component={Home} options={{
            headerShown: false
          }}/>
          <stack.Screen name="About" component={About} />
        </stack.Navigator>
    </NavigationContainer>
   
  );
}


