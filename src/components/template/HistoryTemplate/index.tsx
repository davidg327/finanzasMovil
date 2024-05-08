import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles.ts';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CardHistories from '../../organisms/CardHistories';
import TextComponent from '../../atoms/TextComponent';
import PressText from '../../molecules/PressText';

interface IHistoryTemplate {
  stateId: string;
  userId: string;
  expenseId: string;
  amount: string;
}

const Item = ({item}: any) => {
  return (
    <CardHistories
      date={item.date}
      payment={item.payment}
      state={item.state.name}
    />
  );
};

const HistoryTemplate = ({
  stateId,
  userId,
  expenseId,
  amount,
}: IHistoryTemplate) => {
  const navigation = useNavigation();

  const {histories} = useSelector(state => state.history);

  return (
    <View style={styles.container}>
      {histories.length > 0 && (
        <FlatList
          data={histories}
          renderItem={Item}
          contentContainerStyle={styles.flatList}
        />
      )}
      {histories.length === 0 && (
        <TextComponent
          styles={styles.text}
          text={'Sin historial por el momento'}
        />
      )}
      {stateId !== '5' && (
        <PressText
          action={() =>
            navigation.navigate('FormHistory', {
              userId: userId,
              expenseId: expenseId,
              amount: amount,
            })
          }
          text={'Crear abono'}
          textStyle={styles.textButton}
          containerStyle={styles.button}
        />
      )}
    </View>
  );
};

export default HistoryTemplate;
