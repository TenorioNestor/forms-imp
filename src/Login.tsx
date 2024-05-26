import {  VStack, Text, Box , Link, Image} from "native-base";
import { TouchableOpacity } from "react-native";
import { TEMAS } from "./estilos/temas";
import { EntradaTexto } from "./components/entradaTexto";
import { Botao } from "./components/botao";
import { useNavigation } from "@react-navigation/native";





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
    const navigation = useNavigation();

    return(    
        <VStack flex={1} justifyContent="center" p={5} backgroundColor={TEMAS.colors.white} >
            <Box alignItems="center" pb={3}>
                <Image source={{
                uri: "https://cdn-icons-png.flaticon.com/128/1060/1060673.png"
                }} alt="Alternate Text" size="xl"/>
            </Box>
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
            <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

            <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Formulario')}>
                <Text color="blue.500">
                    Faça seu cadastro!
                </Text>
                </TouchableOpacity>
            </Box> 
        </VStack>
    );
}

