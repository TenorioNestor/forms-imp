import { StyleSheet, View, Text } from "react-native";
import {  VStack } from "native-base";
import { TEMAS } from "./estilos/temas";

export default function App(){
    return(    
        <VStack flex={1} alignItems="center" p={5} >
            <Text>Tela de Login</Text>
        </VStack>
    );
}

