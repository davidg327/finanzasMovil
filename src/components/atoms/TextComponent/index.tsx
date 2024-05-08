import React from 'react';
import {Text, TextStyle} from 'react-native';

interface ITextComponent {
  styles: TextStyle;
  text?: string;
  children?: React.ReactNode;
}

const TextComponent = ({styles, text, children}: ITextComponent) => {
  return (
    <Text maxFontSizeMultiplier={1} style={styles}>
      {text}
      {children}
    </Text>
  );
};

export default TextComponent;
