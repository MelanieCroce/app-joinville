import {StyleSheet} from 'react-native';
import { textDropDown, bgInput } from '../variables';

export const styleResetPassword = StyleSheet.create({
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
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 20,
    fontSize: 12,
  },
  link: {
    marginTop: 20,
    color: '#fff',
  },    
  input: {
    paddingLeft: 5, 
    width: '100%', 
    borderColor: bgInput, 
    borderWidth: 1, 
    borderRadius: 30,
    marginTop: 10, 
    marginBottom: 15,   
    height: 40,
    textAlign: 'center',
  }
});
 