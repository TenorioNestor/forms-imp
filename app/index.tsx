import Principal from '../src/Principal'
import { TEMAS } from '../src/estilos/temas';
import { NativeBaseProvider } from 'native-base';



export default function App(){
    return(
        <NativeBaseProvider theme={TEMAS}>
            <Principal/>
        </NativeBaseProvider>
    );
}

