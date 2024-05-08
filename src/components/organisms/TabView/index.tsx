import React from 'react';
import {DimensionValue, TextStyle, View} from 'react-native';
import PressText from '../../molecules/PressText';
import styles from './styles.ts';

interface ITabView {
  headers: any;
  setFocus: (value: any) => void;
  width: DimensionValue;
  backgroundColor: string;
  borderWidth: number;
  borderColor: string;
  focusState: any;
}

const TabView = ({
  headers,
  setFocus,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
  focusState,
}: ITabView) => {
  return (
    <View style={styles.container}>
      {headers.map((header: any, index: number) => (
        <PressText
          action={() => setFocus(header)}
          text={header.title}
          textStyle={{...styles.text,  color: focusState.value === header.value ? 'white' : 'black' }}
          containerStyle={{
            ...styles.containerHeader,
            width: width,
            backgroundColor:
              focusState.value === header.value
                ? backgroundColor
                : 'transparent',
            borderWidth: focusState.value === header.value ? 0 : borderWidth,
            borderColor: borderColor,
          }}
          key={index}
        />
      ))}
    </View>
  );
};

export default TabView;
