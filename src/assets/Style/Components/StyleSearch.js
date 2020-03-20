import {Platform, StyleSheet} from 'react-native';
import { bgInput, borderInput, titleColor, textDropDown } from '../variables';

export const styleSearch = StyleSheet.create({
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
    alignSelf: 'center', 
    ...Platform.select({
      ios: {
        top: 70,
      },
      android: {
        top: 40,
      },
    }), 
    borderRadius: 5,
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  modalPicker: {
    backgroundColor: 'white', 
    position:'absolute', 
    alignSelf: 'center', 
    top: "40%",    
    height: 230,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  triangle: {
    position: 'relative',
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
    borderBottomColor: 'red',  
    borderRightColor: 'transparent',  
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
    paddingLeft: 10, 
    width: '100%', 
    borderColor: bgInput, 
    borderWidth: 1, 
    borderRadius: 30,
    marginTop: 10,
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
      android: {
        height: 40,
      },
    }), 
  },
  dropdownForm:{
    fontSize: 14, 
    fontFamily: 'Montserrat-Regular',
    borderRadius: 5, 
    borderColor: borderInput, 
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
    width: '80%',
    marginRight: 10
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
    paddingLeft: 10, 
    width: '100%', 
    borderColor: titleColor, 
    borderWidth: 1, 
    borderRadius: 30,
    marginTop: 40,    
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
      android: {
        height: 40,
      },
    }), 

  }
});
