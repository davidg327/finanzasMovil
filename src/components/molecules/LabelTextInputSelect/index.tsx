import React from 'react';
import {View} from 'react-native';
import TextComponent from '../../atoms/TextComponent';
import styles from './styles.ts';
import TextInputSelectComponent from '../../atoms/TextInputSelectComponent';

interface ILabelTextInputSelect {
  label: string;
  data: any;
  changeText: (text: string) => void;
  placeholder: string;
}

const LabelTextInputSelect = ({
  label,
  data,
  changeText,
  placeholder,
}: ILabelTextInputSelect) => {
  return (
    <View style={styles.container}>
      <TextComponent styles={styles.label} text={label} />
      <TextInputSelectComponent
        data={data}
        onSelect={changeText}
        dropdownStyle={styles.dropdownMenuStyle}
        containerInputStyle={styles.dropdownButtonStyle}
        textInputStyle={styles.textButton}
        placeHolder={placeholder}
        itemViewStyle={styles.dropdownItemStyle}
        itemTextStyle={styles.textItemButton}
      />
    </View>
  );
};

export default LabelTextInputSelect;
