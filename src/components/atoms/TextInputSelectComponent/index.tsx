import React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import TextComponent from '../TextComponent';

interface ITextInputSelectComponent {
  data: any[];
  onSelect: (selectedItem: any, index: number) => void;
  dropdownStyle: ViewStyle;
  containerInputStyle: ViewStyle;
  textInputStyle: TextStyle;
  placeHolder: string;
  itemViewStyle: ViewStyle;
  itemTextStyle: TextStyle;
}

const TextInputSelectComponent = ({
  data,
  onSelect,
  dropdownStyle,
  containerInputStyle,
  textInputStyle,
  placeHolder,
  itemViewStyle,
  itemTextStyle,
}: ITextInputSelectComponent) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={onSelect}
      renderButton={(selectedItem: any) => {
        return (
          <View style={containerInputStyle}>
            <TextComponent
              styles={textInputStyle}
              text={
                selectedItem === null
                  ? placeHolder
                  : selectedItem.name.length > 18
                  ? selectedItem.name.substring(0, 18) + '...'
                  : selectedItem.name
              }
            />
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...itemViewStyle,
              ...(isSelected && {
                backgroundColor: 'blue',
              }),
            }}>
            <TextComponent
              styles={{...itemTextStyle, color: isSelected ? 'white' : 'black'}}
              text={item.name}
            />
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={dropdownStyle}
    />
  );
};

export default TextInputSelectComponent;
