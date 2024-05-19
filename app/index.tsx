import Login from '../src/Login'
import { NativeBaseProvider} from 'native-base'
import { TEMAS } from '@/src/estilos/temas';
import { StyleSheet, StatusBar } from 'react-native';
import Formulario from '@/src/Formulario';


export default function App(){
    return(
        <NativeBaseProvider theme={TEMAS} >
            <Formulario/>
            <StatusBar />
        </NativeBaseProvider>
        
    );
}
