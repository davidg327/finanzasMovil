import React from 'react';
import {View} from 'react-native';
import LabelTextInput from '../../molecules/LabelTextInput';
import PressText from '../../molecules/PressText';
import styles from './styles.ts';

interface IFormUserTemplate {
  focus: any;
  setData: any;
  formData: any;
  handleUser: () => void;
}

const FormUserTemplate = ({
  focus,
  setData,
  formData,
  handleUser,
}: IFormUserTemplate) => {
  return (
    <View>
      <LabelTextInput
        label={'Nombre'}
        value={formData?.name !== undefined ? formData.name : focus.name}
        changeText={text => setData('name', text)}
        placeholder={'Nombre'}
      />
      <LabelTextInput
        label={'Identificación'}
        value={
          formData?.identification !== undefined
            ? formData.identification
            : focus.identification
        }
        changeText={text => setData('identification', text)}
        placeholder={'Identificación'}
      />
      <LabelTextInput
        label={'Teléfono'}
        value={formData?.phone !== undefined ? formData.phone : focus.phone}
        changeText={text => setData('phone', text)}
        placeholder={'Teléfono'}
      />
      <LabelTextInput
        label={'Correo'}
        value={formData?.email !== undefined ? formData.email : focus.email}
        changeText={text => setData('email', text)}
        placeholder={'Correo'}
      />
      <PressText
        action={handleUser}
        text={focus?.name ? 'Editar usuario' : 'Crear usuario'}
        textStyle={styles.textButton}
        containerStyle={styles.containerButton}
      />
    </View>
  );
};

export default FormUserTemplate;
