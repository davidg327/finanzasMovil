import React, {useState} from 'react';
import TabView from '../../organisms/TabView';
import {FlatList, View} from 'react-native';
import styles from './styles.ts';
import {useSelector} from 'react-redux';
import CardUsers from '../../organisms/CardUsers';
import PressText from '../../molecules/PressText';
import CardExpenses from '../../organisms/CardExpenses';
import {useNavigation} from '@react-navigation/native';

interface IHomeTemplate {}

const list = [
  {value: 1, title: 'Usuarios'},
  {value: 2, title: 'Gastos'},
];

const Item = ({item, navigation}: any) => {
  return (
    <CardUsers
      name={item.name}
      identification={item.identification}
      phone={item.phone}
      email={item.email}
      state={item.state.name}
      navigation={() => navigation.navigate('FormUser', {focus: item})}
    />
  );
};

const ItemExpenses = ({item, navigation}: any) => {
  return (
    <CardExpenses
      name={item.name}
      amount={item.amount}
      date={item.date}
      user={item.user.name}
      state={item.state.name}
      navigation={() =>
        navigation.navigate('History', {
          userId: item.user.id,
          stateId: item.state.id,
          expenseId: item.id,
          amount: item.amount,
        })
      }
    />
  );
};

const HomeTemplate = ({}: IHomeTemplate) => {
  const navigation = useNavigation();

  const {users} = useSelector(state => state.user);
  const {expenses} = useSelector(state => state.expense);

  const [focusState, setFocusState] = useState<any | null>(list[0]);

  return (
    <View style={styles.container}>
      <TabView
        headers={list}
        setFocus={setFocusState}
        width={'45%'}
        focusState={focusState}
        backgroundColor={'#001696'}
        borderWidth={2}
        borderColor={'#001696'}
      />
      <FlatList
        data={focusState.value === 1 ? users : expenses}
        renderItem={({item}) =>
          focusState.value === 1 ? (
            <Item item={item} navigation={navigation} />
          ) : (
            <ItemExpenses item={item} navigation={navigation} />
          )
        }
        contentContainerStyle={styles.flatList}
      />
      <PressText
        action={() => {
          if (focusState.value === 1) {
            navigation.navigate('FormUser', {focus: {}});
          } else {
            navigation.navigate('FormExpense');
          }
        }}
        text={'+'}
        textStyle={styles.text}
        containerStyle={styles.containerButton}
      />
    </View>
  );
};

export default HomeTemplate;
