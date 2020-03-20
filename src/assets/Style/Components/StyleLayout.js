import {StyleSheet} from 'react-native';
import { bgColor, textColorHeader } from '../variables';

export const StyleLayout = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      backgroundColor: bgColor,
      flex: 1,
    },  
    logo: {
      flex: 1,
      width: "80%",
      height: 330,
      position: 'absolute',
      top: -60,
      right: -50,
      opacity: 0.07,
    },
    header: {
      height: 80,
      paddingBottom: 10,
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    menu: {
      display: 'flex',
      flexDirection: 'row',
    },
    menutext: {
      color: textColorHeader,
      marginTop: 2,
      marginLeft: 10,
      fontFamily: 'Montserrat-Regular',
      fontSize: 15
    }, 
    body: {
      paddingTop: 20,
    }
});
