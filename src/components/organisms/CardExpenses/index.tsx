import React from 'react';
import {Pressable, View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import styles from './styles.ts';

interface ICardUsers {
  name: string;
  amount: string;
  date: string;
  state: string;
  user: string;
  navigation: () => void;
}

const CardExpenses = ({
  name,
  amount,
  date,
  user,
  state,
  navigation,
}: ICardUsers) => {
  return (
    <Pressable style={styles.container} onPress={navigation}>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Nombre: '} />
        <TextComponent styles={styles.name} text={name} />
      </View>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Valor: '} />
        <TextComponent styles={styles.name} text={amount} />
      </View>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Fecha: '} />
        <TextComponent styles={styles.name} text={date.substring(0, 10)} />
      </View>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Usuario: '} />
        <TextComponent styles={styles.name} text={user} />
      </View>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Estado: '} />
        <TextComponent styles={styles.name} text={state} />
      </View>
    </Pressable>
  );
};

export default CardExpenses;
