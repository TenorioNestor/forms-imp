import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";

import Principal from "./Principal";
import Perfil from "./Perfil";
import Informacoes from "./Informacoes";

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
    icon: 'calendar'
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'search'
  }
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
              <Icon name={tab.icon} color={color} size={size} />
            )
          }}
        />
      ))
      }
    </Tab.Navigator>
  )
}