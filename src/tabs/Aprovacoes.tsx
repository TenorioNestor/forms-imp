import { VStack, Text, Progress, Box} from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'



export default function Aprovacoes(){
  return(
    <VStack alignItems="center" justifyContent="center">
      <Text fontSize="24">Suas aprovações</Text>
      <Box w="90%" maxW="400" pt={5}>
        <VStack space="md">
          <VStack mx="4" space="md">
            <Text>Projeto: Empresa Express</Text>
            <Progress colorScheme="secondary" value={45} />
            <TouchableOpacity style={style.container} >
              <Text  color="white">Ver mais detalhes</Text>
            </TouchableOpacity>
            <Text>Projeto: Empresa Monitorar</Text>
            <Progress colorScheme="light" value={75} />
            <TouchableOpacity style={style.container} >
              <Text  color="white">Ver mais detalhes</Text>
            </TouchableOpacity>
          </VStack>
        </VStack>
      </Box>
    </VStack>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems:"center",
    padding:10,
    borderRadius:10,
    width:"50%",
    backgroundColor:'#002851',
    color:'#fff'
  }
})