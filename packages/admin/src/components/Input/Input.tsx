import React from 'react';
import { Input as BaseInput, SIZE } from 'baseui/input';
import {useStyletron} from 'baseui';
const getInputFontStyle = ({ $theme }) => {
  return {
    
    color: $theme.colors.textDark,
    ...$theme.typography.fontBold14,
  };
};

const Input = ({ ...props }) => {
  const [css] = useStyletron();

  return (
    <BaseInput
    
      overrides={{
        Input: {
          style: ({ $theme }) => {
            return {
             
              ...getInputFontStyle({ $theme }),
            };
          },
        },
      }}
      {...props}
    />
  );
};

export { SIZE };
export default Input;
