import React from 'react';
import {Pressable, View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import styles from './styles.ts';

interface ICardUsers {
  name: string;
  identification: string;
  phone: string;
  email: string;
  state: string;
  navigation: () => void;
}

const CardUsers = ({
  name,
  identification,
  phone,
  email,
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
        <TextComponent styles={styles.label} text={'Identificación: '} />
        <TextComponent styles={styles.name} text={identification} />
      </View>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Teléfono: '} />
        <TextComponent styles={styles.name} text={phone} />
      </View>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Correo: '} />
        <TextComponent styles={styles.name} text={email} />
      </View>
      <View style={styles.containerRow}>
        <TextComponent styles={styles.label} text={'Estado: '} />
        <TextComponent styles={styles.name} text={state} />
      </View>
    </Pressable>
  );
};

export default CardUsers;
