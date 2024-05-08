import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles.ts';

interface ITextInputComponent {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const TextInputComponent = ({
  value,
  onChangeText,
  placeholder,
}: ITextInputComponent) => {
  return (
    <TextInput
      defaultValue={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

export default TextInputComponent;
