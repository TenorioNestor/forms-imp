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
      <FormControl mt={3} mr={10} ml={10}>
        {label && <FormControl.Label >{label}</FormControl.Label> }
        <Input
          placeholder={placeholder}
          w="90%"
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