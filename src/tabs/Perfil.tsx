import { VStack, Text, ScrollView, Avatar, Divider, Box } from 'native-base'
import { TouchableOpacity, StyleSheet } from "react-native";

export default function Perfil(){
  return(
    <VStack p={5} justifyContent="center" >
      <Box background="#002851" m={1} p={8} borderRadius={20} >
      <Avatar bg="amber.500" source={{
      uri: "https://images.unsplash.com/photo-1548783300-70b41bc84f56?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }} size="xl">
        NB
        <Avatar.Badge bg="green.500" />
      </Avatar>
        <Text fontSize={24} pt={3} color="white" >Sr Tarantino</Text>
        <Divider/>
        <Text fontSize={16} pt={5} color="white">Organização</Text>
        <Text fontSize={24} pt={2} color="white">Security Company</Text>
        <Divider/>
        <Text fontSize={16} pt={5} color="white">Perfil</Text>
        <Text fontSize={24} pt={2} color="white">Administrador</Text>
        <Divider/>
      </Box>
           
    </VStack>
  )
}


