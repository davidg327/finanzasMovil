import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles.ts';
import FormUserTemplate from '../../components/template/FormUserTemplate';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {createUser, updateUser} from '../../state/user/reducer.ts';

const FormUserScreen = ({route}: any) => {
  const navigation = useNavigation();

  const {focus} = route.params;

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

  const setData = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleUser = () => {
    if (focus?.name) {
      handleEdit();
    } else {
      handleCreate();
    }
  };

  const handleCreate = () => {
    let values = {
      name: formData.name,
      identification: parseInt(formData.identification, 10),
      phone: parseInt(formData.phone, 10),
      email: formData.email.toLowerCase(),
    };
    dispatch(createUser({values: values}));
    navigation.goBack();
  };

  const handleEdit = () => {
    let values = {
      user_id: parseInt(focus.id, 10),
      name: formData?.name ? formData.name : focus.name,
      identification: formData?.identification
        ? parseInt(formData.identification, 10)
        : parseInt(focus.identification, 10),
      phone: formData?.phone
        ? parseInt(formData.phone, 10)
        : parseInt(focus.phone, 10),
      email: formData?.email ? formData.email.toLowerCase() : focus.email,
    };
    dispatch(updateUser({values: values}));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <FormUserTemplate
        focus={focus}
        setData={setData}
        formData={formData}
        handleUser={handleUser}
      />
    </SafeAreaView>
  );
};

export default FormUserScreen;
