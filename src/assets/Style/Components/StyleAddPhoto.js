import {StyleSheet} from 'react-native';
import { titleColor, subTitleColor } from '../variables';

export const styleAddPhoto = StyleSheet.create({
  modal: {
    width: '80%', 
    backgroundColor: 'white', 
    borderRadius: 5,
    elevation: 5,
    position: 'absolute',
    alignSelf: 'center',

  },
  modalContent: {
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    color: titleColor,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contentText: {
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 20,
    fontSize: 12,
  }
});
 