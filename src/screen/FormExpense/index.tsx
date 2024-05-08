import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles.ts';
import FormExpenseTemplate from '../../components/template/FormExpenseTemplate';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {createExpense} from '../../state/expense/reducer.ts';
import moment from 'moment';

const FormExpenseScreen = ({}) => {
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
      name: formData.name,
      amount: parseInt(formData.amount, 10),
      date: moment(formData.date).format('YYYY-MM-DD'),
      user_id: parseInt(formData.user_id.id, 10),
      state_id: 3,
    };
    dispatch(createExpense({values: values}));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FormExpenseTemplate
        setData={setData}
        formData={formData}
        handleExpense={handleCreate}
      />
    </SafeAreaView>
  );
};

export default FormExpenseScreen;
