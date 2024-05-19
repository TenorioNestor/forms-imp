import {  VStack, Input, Text, Box } from "native-base";
import { TEMAS } from "./estilos/temas";
import { EntradaTexto } from "./components/entradaTexto";
import { Botao } from "./components/botao";


export default function App(){
    return(    
        <VStack flex={1} justifyContent="center" alignItems="center" backgroundColor={TEMAS.colors.white} >
            <Text  fontSize={24}>Tela de Login</Text>
            <Box justifyContent="center" alignItems="center">
                <EntradaTexto
                label="Usuário"
                placeholder="E-mail ou CPF"
                />
                <EntradaTexto
                placeholder=""
                label="Senha"
                secureTextEntry
                />
                
            </Box>    
            <Botao>Acessar</Botao>   
        </VStack>
    );
}

