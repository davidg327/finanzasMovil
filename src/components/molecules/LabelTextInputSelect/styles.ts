import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  dropdownMenuStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: '20%',
  },
  dropdownButtonStyle: {
    marginTop: 10,
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
  },
  textButton: {
    color: 'black',
    fontSize: 18,
  },
  dropdownItemStyle: {
    width: '100%',
  },
  textItemButton: {
    fontSize: 20,
    textAlign: 'left',
    padding: 8,
  },
});

export default styles;
