import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  flatList: { marginHorizontal: 15, marginVertical: 10 },
  text: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    padding: 8,
  },
  textInput: {
    borderWidth: 1,
    margin: 10,
    borderColor: 'purple',
    padding: 10,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    borderRadius: 8,
  },
  touchable: { marginVertical: 10 },
  completed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    borderRadius: 8,
  },
  failure: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    borderRadius: 8,
  },
});
export default styles;
