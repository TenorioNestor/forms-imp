import { VStack, Text, Box } from "native-base";
import { TEMAS } from "./estilos/temas";


export default function Formulario(){
    const sessoes = [
        {
            id:1,
            titulo:"Informações d projeto",
            entradaTexto: [
                {
                    id: 1,
                    label:"Nome do projeto",
                },
                {
                    id: 2,
                    label:"CNPJ",
                },
                {
                    id: 3,
                    label:"Parceiro Futturis",
                }
            ]
        }
    ]


    return(
        <VStack alignItems="center" >
            
            <Box>
            <Text fontSize={TEMAS.fontSizes.lg} >
                Formulario de implantação
            </Text>

            </Box>

        </VStack>
    );
}