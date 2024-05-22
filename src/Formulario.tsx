import { VStack, Text, Box, Checkbox, ScrollView } from "native-base";
import { TEMAS } from "./estilos/temas";
import { EntradaTexto } from "./components/entradaTexto";
import { sessoes } from "./utils/cadastroEntradaTexto";
import { Botao } from "./components/botao";
import { useState } from "react";


export default function Formulario(){
    const [numSessao, setNumSessao] = useState(0);

    function avancarSessao(){
        if (numSessao < sessoes.length -1){
            setNumSessao(numSessao+1)
        }
    }

    function voltarSessao(){
        if (numSessao > 0){
            setNumSessao(numSessao-1)
        }
    }


    return(
        <ScrollView flex={1} p={5} >
            <Text fontSize={TEMAS.fontSizes.lg} >
                Formulario de implantação
            </Text>            
            <Box p={1}>
                {
                    sessoes[numSessao].titulo
                }
            </Box>
            <Box fontSize={20} p={5}>
                {
                    sessoes[numSessao].checkBox.map(chackbox =>{
                        return <Checkbox 
                        value={chackbox.value}
                        key={chackbox.id}>
                            {chackbox.value}
                        </Checkbox>
                    })
                }
            </Box>
            <Box>
                {
                    sessoes[numSessao].entradaTexto.map(entrada => {
                        return <EntradaTexto
                        label={entrada.label}
                        placeholder={entrada.placeholder}
                        key={entrada.id}
                        />
                    })
                }
            </Box>
            {numSessao > 0 && <Botao onPress={()=> voltarSessao()} bgColor={TEMAS.colors.purple[300]}>Voltar</Botao>}
            <Botao onPress={() => avancarSessao()}> Avançar</Botao>


        </ScrollView>
    );
}