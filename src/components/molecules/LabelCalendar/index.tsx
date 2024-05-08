import React from 'react';
import {View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import styles from './styles.ts';
import PressText from '../PressText';

interface ILabelCalendar {
  label: string;
  value: string;
  action: () => void;
}

const LabelCalendar = ({label, value, action}: ILabelCalendar) => {
  return (
    <View style={styles.container}>
      <TextComponent styles={styles.label} text={label} />
      <PressText
        action={action}
        text={value}
        textStyle={{}}
        containerStyle={styles.input}
      />
    </View>
  );
};

export default LabelCalendar;
