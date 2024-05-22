import { Input, FormControl, Center } from "native-base";


interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
  }
  
  export function EntradaTexto ({ 
    label, 
    placeholder, 
    secureTextEntry = false
  } : InputProps) : JSX.Element {
    return (
      <FormControl mt={5} >
        {label && <FormControl.Label >{label}</FormControl.Label> }
        <Input
          placeholder={placeholder}
          w="100%"
          borderRadius="lg"
          bgColor="gray.100"
          fontSize={16}
          secureTextEntry={secureTextEntry}
          shadow={3}
          p={2}
          height={50}
        />
      </FormControl>
    );
  };