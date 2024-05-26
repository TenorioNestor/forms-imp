import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"

import Informacoes from "./Informacoes";
import Perfil from "./Perfil";
import Principal from "./Principal";

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851"
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF"
}

const tabs = [
  {
    name: 'Principal',
    component: Principal,
    icon: 'home'
  },
  {
    name: 'Informações',
    component: Informacoes,
    icon: 'info'
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'people'
  },
]

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            )
          }}
        />
      ))
      }
    </Tab.Navigator>
  )
}