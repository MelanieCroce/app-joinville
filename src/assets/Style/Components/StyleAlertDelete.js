import {StyleSheet} from 'react-native';
import { textDropDown } from '../variables';

export const styleAlert = StyleSheet.create({
  modal: {
    width: '80%', 
    backgroundColor: 'white', 
    borderRadius: 5,
    elevation: 5,
    position: 'absolute',
    alignSelf: 'center',

  },
  modalContent: {
    padding: 15,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    color: textDropDown,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  contentText: {
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 20,
    fontSize: 12,
  }
});
 