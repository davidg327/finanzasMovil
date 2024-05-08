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

interface IFormHistoryTemplate {
  setData: any;
  formData: any;
  handle: () => void;
}

const FormHistoryTemplate = ({
  setData,
  formData,
  handle,
}: IFormHistoryTemplate) => {
  const [calendar, setCalendar] = useState(false);

  return (
    <View>
      <LabelTextInput
        label={'Abono'}
        value={formData?.payment !== undefined ? formData.payment : ''}
        changeText={text => setData('payment', text)}
        placeholder={'Abono'}
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
      <CalendarComponent
        visible={calendar}
        confirm={date => {
          setData('date', date);
          setCalendar(false);
        }}
        cancel={() => setCalendar(false)}
      />
      <PressText
        action={handle}
        text={'Crear abono'}
        textStyle={styles.textButton}
        containerStyle={styles.containerButton}
      />
    </View>
  );
};

export default FormHistoryTemplate;
