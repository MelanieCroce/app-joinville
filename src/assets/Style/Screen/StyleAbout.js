import {StyleSheet} from 'react-native';
import { textColor } from '../variables';

export const styleAbout = StyleSheet.create({
  content: {
    marginHorizontal: 20, 
    paddingTop: 10,
    paddingBottom: 10
  },
  title: {
    fontSize: 25, 
    fontFamily: 'Montserrat-Regular', 
    textAlign: 'center', 
    color: textColor, 
    marginBottom: 20    
  },
  image: {
    width: '100%', 
    height: 250, 
    marginBottom: 20,
    borderRadius: 5,
  },
  text: {
    marginBottom: 15, 
    lineHeight: 18,
  }
});
