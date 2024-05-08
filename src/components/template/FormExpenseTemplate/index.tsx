import React, {useState} from 'react';
import {View} from 'react-native';
import moment from 'moment/moment';
import LabelTextInput from '../../molecules/LabelTextInput';
import PressText from '../../molecules/PressText';
import styles from './styles.ts';
import LabelCalendar from '../../molecules/LabelCalendar';
import CalendarComponent from '../../atoms/CalendarComponent';
import LabelTextInputSelect from '../../molecules/LabelTextInputSelect';
import {useSelector} from 'react-redux';

interface IFormExpenseTemplate {
  setData: any;
  formData: any;
  handleExpense: () => void;
}

const FormExpenseTemplate = ({
  setData,
  formData,
  handleExpense,
}: IFormExpenseTemplate) => {
  const [calendar, setCalendar] = useState(false);
  const {nameUsers} = useSelector(state => state.user);

  return (
    <View>
      <LabelTextInput
        label={'Nombre'}
        value={formData?.name !== undefined ? formData.name : ''}
        changeText={text => setData('name', text)}
        placeholder={'Nombre'}
      />
      <LabelTextInput
        label={'Monto deuda'}
        value={formData?.amount !== undefined ? formData.amount : ''}
        changeText={text => setData('amount', text)}
        placeholder={'Monto'}
      />
      <LabelCalendar
        label={'Fecha'}
        value={
          formData?.date !== undefined
            ? moment(formData.date).format('YYYY-MM-DD')
            : 'Fecha'
        }
        action={() => setCalendar(true)}
      />
      <LabelTextInputSelect
        label={'Usuario'}
        data={nameUsers}
        changeText={text => setData('user_id', text)}
        placeholder={'Usuario'}
      />
      <CalendarComponent
        visible={calendar}
        confirm={date => {
          setData('date', date);
          setCalendar(false);
        }}
        cancel={() => setCalendar(false)}
      />
      <PressText
        action={handleExpense}
        text={'Crear gasto'}
        textStyle={styles.textButton}
        containerStyle={styles.containerButton}
      />
    </View>
  );
};

export default FormExpenseTemplate;
