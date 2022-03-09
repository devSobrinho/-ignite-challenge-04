import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

type InputProps = {
  name: string, 
  icon?: (props: IconBaseProps) => JSX.Element, // tem q tipar
} & Pick<HTMLInputElement, "placeholder">;

export const Input = ({ name, icon: Icon, ...rest }: InputProps ) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
    
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};


// CÓDIGO EM JSX ANTES DA MIGRAÇÃO PARA TSX 


//   const Input = ({ name, icon: Icon, ...rest }) => {
//   const inputRef = useRef(null);

//   const [isFocused, setIsFocused] = useState(false);
//   const [isFilled, setIsFilled] = useState(false);

//   const { fieldName, defaultValue, registerField } = useField(name);

//   const handleInputFocus = useCallback(() => {
//     setIsFocused(true);
//   }, []);

//   const handleInputBlur = useCallback(() => {
//     setIsFocused(false);

//     setIsFilled(!!inputRef.current?.value);
//   }, []);

//   useEffect(() => {
//     registerField({
//       name: fieldName,
//       ref: inputRef.current,
//       path: 'value',
//     });
//   }, [fieldName, registerField]);

//   return (
//     <Container isFilled={isFilled} isFocused={isFocused}>
//       {Icon && <Icon size={20} />}

//       <input
//         onFocus={handleInputFocus}
//         onBlur={handleInputBlur}
//         defaultValue={defaultValue}
//         ref={inputRef}
//         {...rest}
//       />
//     </Container>
//   );
// };

// export default Input;
