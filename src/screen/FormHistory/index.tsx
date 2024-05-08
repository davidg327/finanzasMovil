import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles.ts';
import FormHistoryTemplate from '../../components/template/FormHistoryTemplate';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {createHistory} from '../../state/history/reducer.ts';

const FormHistoryScreen = ({route}: any) => {
  const {userId, expenseId, amount} = route.params;

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

  const setData = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleCreate = () => {
    let values = {
      date: moment(formData.date).format('YYYY-MM-DD'),
      payment: parseInt(formData.payment, 10),
      state_id: parseInt(amount, 10) <= parseInt(formData.payment, 10) ? 5 : 4,
      user_id: parseInt(userId, 10),
      expense_id: parseInt(expenseId, 10),
    };
    dispatch(createHistory({values: values}));
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FormHistoryTemplate
        setData={setData}
        formData={formData}
        handle={handleCreate}
      />
    </SafeAreaView>
  );
};

export default FormHistoryScreen;
