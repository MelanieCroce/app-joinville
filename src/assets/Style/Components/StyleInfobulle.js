import {StyleSheet} from 'react-native';
import { textDropDown, borderInput } from '../variables';

export const styleInfobulle = StyleSheet.create({
  menuText: {
    color: "#fff",
    marginTop: 2,
    marginLeft: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15
  }, 
  modal: {
    width: 250, 
    backgroundColor: 'white', 
    position:'absolute', 
    //alignSelf: 'center', 
    //top: 0,    
    left: -200,
    borderRadius: 5,
    elevation: 5,
  },
  modalContent: {
    height: 180, 
    padding: 15,
  },
  close: {
    position: 'absolute',
    right: 5,
    top: 5,
  }, 
  dropDown: {
    paddingLeft: 5, 
    width: '100%', 
    borderColor: borderInput, 
    borderWidth: 1, 
    borderRadius: 30,
    marginTop: 10,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    color: textDropDown,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10
  },
  triangle: {
    position: 'absolute',
    alignSelf: 'center', 
    top: -10,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderBottomColor: 'white',  
    borderRightColor: 'transparent',  
  },
  input: {
    paddingLeft: 5, 
    width: '100%', 
    borderColor: borderInput, 
    borderWidth: 1, 
    borderRadius: 30,
    marginTop: 10,    
    height: 40,
  }
});
