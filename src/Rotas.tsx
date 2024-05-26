import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



import Login from "./Login";
import Tabs from "./tabs";
import Formulario from "./Formulario";

const Tab = createNativeStackNavigator();



export default function Rotas(){
  return(
    <NavigationContainer  independent={true }>
      <Tab.Navigator>
        <Tab.Screen 
          name="Login" component={Login} options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Formulario" component={Formulario} options={{ headerShown: true }}
        />
        <Tab.Screen 
          name="Tabs" component={Tabs} options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}