import React from 'react';
import {View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import styles from './styles.ts';
import TextInputComponent from '../../atoms/TextInputComponent';

interface ILabelTextInput {
  label: string;
  value: string;
  changeText: (text: string) => void;
  placeholder: string;
}

const LabelTextInput = ({
  label,
  value,
  changeText,
  placeholder,
}: ILabelTextInput) => {
  return (
    <View style={styles.container}>
      <TextComponent styles={styles.label} text={label} />
      <TextInputComponent value={value} onChangeText={changeText}  placeholder={placeholder}/>
    </View>
  );
};

export default LabelTextInput;
