import {StyleSheet} from 'react-native';
import { textColor } from '../variables';

export const styleAbout = StyleSheet.create({
  content: {
    marginHorizontal: 20, 
    paddingTop: 10
    
  },
  title: {
    fontSize: 25, 
    fontFamily: 'Montserrat-Regular', 
    color: textColor, 
    marginBottom: 20    
  },
  text: {
    marginBottom: 15, 
    lineHeight: 18,
  }
});
