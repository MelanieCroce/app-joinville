import {StyleSheet} from 'react-native';
import { textDropDown, titleDropDown } from '../variables';

export const styleEspaceAnnonceur = StyleSheet.create({
  content: {
    marginHorizontal: 20, 
    paddingTop: 10,
    paddingBottom: 10
  },
  title: {
    fontSize: 18, 
    fontFamily: 'Poppins-Regular',  
    color: titleDropDown, 
    marginTop: 5,
  },
  subTitle: {
    fontSize: 12, 
    fontFamily: 'Poppins-Regular',  
    color: textDropDown,     
    marginBottom: 10,    
  },
  text: {
    fontFamily: 'Poppins-Regular',  
    fontSize: 12,   
    lineHeight: 18 
  },
  btnDropDownText: {
    color: textDropDown,
    fontFamily: 'Montserrat-Regular',
  },
  btnDropDown: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    elevation: 5,
    // Ombre IOS 
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    marginTop: 15,
    borderRadius: 5,
    position: 'relative',
  },
  ItemDropDown: {
    width: '100%',
    padding: 15,
    elevation: 3,
    // Ombre IOS 
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    backgroundColor: '#eeefef',
    marginVertical: 2,
    borderRadius: 5
  },
  itemPromo: {
    flexDirection: 'row', 
    backgroundColor: 'white',
    borderRadius: 5, 
    marginHorizontal: 0,
    marginVertical: 5,
    elevation: 3, 
    // Ombre IOS 
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.05,
    shadowRadius: 10, 
    padding: 15,
  },
  titleItem: {
    fontSize: 18, 
    fontFamily: 'Poppins-Regular',  
    color: titleDropDown, 
    marginBottom: 5,
  },
  subTitleItem: {
    fontSize: 12, 
    fontFamily: 'Poppins-Regular',  
    color: textDropDown,    
  },
});
