import { VStack, Text, Box, Checkbox, ScrollView } from "native-base";
import { TEMAS } from "./estilos/temas";
import { useNavigation } from "@react-navigation/native";
import { Link } from "native-base";


export default function Formulario(){
    const navigation = useNavigation();
    return(
        <ScrollView flex={1} p={5} >
            <Text fontSize={TEMAS.fontSizes.lg} >
                Entre em contato com nossa equipe
            </Text>            
            
            <Link href='https://www.alura.com.br' mt={2}>
                Para ter as permissões de acesso? 
                Clique aqui.
            </Link>


        </ScrollView>
    );
}