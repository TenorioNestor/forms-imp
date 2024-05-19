import { Button, IButtonProps } from 'native-base';
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

export function Botao({ children, autoSize = false, color, ...rest }: ButtonProps){

  return (
    <Button
      bg={color || 'blue.800'}
      mt={10}
      borderRadius="lg"
      w="90%"
      alignItems="center"
      textAlign="center"
      _text={{ color: 'white' }}
      {...rest}
    >
      {children}
    </Button>
  );
};  