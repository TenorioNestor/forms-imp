import {  VStack, Text, Box } from "native-base";
import { TEMAS } from "./estilos/temas";
import { EntradaTexto } from "./components/entradaTexto";
import { Botao } from "./components/botao";


export default function Login(){
    const sessoes = [
        {
            EntradaTexto:[
                {
                    id:1,
                    placeholder:"E-mail ou CPF",
                    label:"Usuário",
                },
                {
                    id:2,
                    placeholder:"",
                    label:"Senha",
                    secureTextEntry:true,
                }
            ]
        }
        
    ]

    return(    
        <VStack flex={1} justifyContent="center" alignItems="center" backgroundColor={TEMAS.colors.white} >
            <Text  fontSize={24}>Tela de Login</Text>
            <Box justifyContent="center" alignItems="center">
                {
                    sessoes[0].EntradaTexto.map(entrada =>{
                        return <EntradaTexto 
                        label={entrada.label} 
                        placeholder={entrada.placeholder} 
                        secureTextEntry={entrada.secureTextEntry} 
                        key={entrada.id}/>
                    })
                }
            </Box>    
            <Botao>Acessar</Botao>   
        </VStack>
    );
}

