import Principal from '../src/Principal'
import { NativeBaseProvider} from 'native-base'
import { TEMAS } from '@/src/estilos/temas';
import { StyleSheet, StatusBar } from 'react-native';



export default function App(){
    return(
        <NativeBaseProvider theme={TEMAS} >
            <Principal/>
            <StatusBar />
        </NativeBaseProvider>
        
    );
}
