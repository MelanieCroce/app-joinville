import {StyleSheet} from 'react-native';
import { colorButton } from '../variables';
import { textButtonLight } from '../variables';

export const stylesButton = StyleSheet.create({
    cta: {
      borderRadius: 20,
      minWidth: 80,
      marginTop: 10,
      
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 20,
      backgroundColor: 'transparent',
      },
    textCta: {
      color: '#fff',
      fontSize: 12,
      marginTop: 5,
      marginBottom: 5,
      textAlign: 'center',
      fontFamily: 'Montserrat-Regular'
    },     
    login: {
      borderRadius: 20,
      width: '65%',
      position: 'relative',
      marginTop: 10,
      borderRadius: 30,
      height: 50,        
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',  
    },
    textLogin: {
      color: textButtonLight,
      fontSize: 15,
      marginBottom: 5,
      textAlign: 'center',
    },  

    light: {
      borderRadius: 20,
      borderColor: colorButton,
      borderWidth: 2,
      paddingVertical: 2,
      paddingHorizontal: 8,
      alignItems: 'center',
    },
    textLight: {
      color: colorButton,
    },

    round: {
      width: 40,
      height: 40,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',  
      elevation: 5,
      backgroundColor: 'transparent',
    },

    square: {
      width: 40,
      height: 40,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',  
      elevation: 5,
      backgroundColor: 'transparent'
    },

    alert: {
      borderRadius: 20,
      width: '100%',
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 20,
      elevation: 4,
      paddingVertical: 5,
      backgroundColor: 'transparent',
    },
    textAlert: {
      color: '#fff',
      fontSize: 15,
      marginTop: 5,
      marginBottom: 5,
      textAlign: 'center',
      fontFamily: 'Montserrat-Regular'
    },   
});