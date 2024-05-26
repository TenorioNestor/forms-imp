import { NativeBaseProvider} from 'native-base'
import { TEMAS } from '@/src/estilos/temas';
import { StyleSheet, StatusBar } from 'react-native';
import Rotas from '@/src/Rotas';

export default function App(){
    return(
        <NativeBaseProvider theme={TEMAS} >
            <StatusBar/>
            <Rotas/>
        </NativeBaseProvider>
        
    );
}
