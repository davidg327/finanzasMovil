import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
});

export default styles;
