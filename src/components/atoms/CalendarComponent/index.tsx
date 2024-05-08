import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface ICalendar {
  visible: boolean;
  confirm: (date: Date) => void;
  cancel: () => void;
}

const CalendarComponent = ({visible, confirm, cancel}: ICalendar) => {
  return (
    <DateTimePickerModal
      isVisible={visible}
      mode="date"
      onConfirm={date => confirm(date)}
      onCancel={cancel}
      confirmTextIOS={'Confirmar'}
      cancelTextIOS={'Cancelar'}
    />
  );
};

export default CalendarComponent;
