import React from 'react';
import {Pressable, TextStyle, ViewStyle} from 'react-native';
import TextComponent from '../../atoms/TextComponent';

interface IPressText {
  containerStyle?: ViewStyle;
  action: () => void;
  text: string;
  textStyle: TextStyle;
}

const PressText = ({containerStyle, action, text, textStyle}: IPressText) => {
  return (
    <Pressable style={containerStyle} onPress={action}>
      <TextComponent styles={textStyle} text={text} />
    </Pressable>
  );
};

export default PressText;
