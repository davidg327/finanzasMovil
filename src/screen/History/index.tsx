import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles.ts';
import HistoryTemplate from '../../components/template/HistoryTemplate';
import {useDispatch} from 'react-redux';
import {getHistory} from '../../state/history/reducer.ts';

const HistoryScreen = ({route}: any) => {
  const {userId, stateId, expenseId, amount} = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    let values = {
      userId: parseInt(userId, 10),
    };
    dispatch(getHistory({values: values}));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HistoryTemplate
        stateId={stateId}
        userId={userId}
        expenseId={expenseId}
        amount={amount}
      />
    </SafeAreaView>
  );
};

export default HistoryScreen;
