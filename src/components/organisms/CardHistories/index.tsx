import React from 'react';
import {View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import styles from './styles.ts';

interface ICardHistories {
  date: string;
  payment: string;
  state: string;
}

const CardHistories = ({date, payment, state}: ICardHistories) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Fecha: '} />
        <TextComponent styles={styles.name} text={date.substring(0, 10)} />
      </View>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Abonado: '} />
        <TextComponent styles={styles.name} text={payment} />
      </View>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Estado: '} />
        <TextComponent styles={styles.name} text={state} />
      </View>
    </View>
  );
};

export default CardHistories;
