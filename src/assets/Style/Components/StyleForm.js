import {StyleSheet} from 'react-native';
import { bgInput, borderInput } from '../variables';

export const styleForm = StyleSheet.create({
  content: {
    marginHorizontal: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    elevation: 2,
    // Ombre IOS 
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 15,
  },
  titleForm: {
    backgroundColor: bgInput,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 15,
  },
  titleFormText: {
    color: 'white',
  },
  contentForm: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  label: {
    color: bgInput,
    fontFamily: 'Montserrat-Regular',
    marginVertical: 10
  },
  input: {
    fontSize: 14, 
    fontFamily: 'Montserrat-Regular',
    borderRadius: 5, 
    borderColor: borderInput, 
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    width: "100%",
  },
  imageUpload: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 20,
    //overflow: 'hidden'
  },
  uploadRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputDate: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14, 
    fontFamily: 'Montserrat-Regular',
    borderRadius: 5, 
    borderColor: borderInput, 
    borderWidth: 1,
    height: 40,
    width: 180,
    marginRight: 10,  
  },
  inputDateText: {
    color: bgInput,
    fontFamily: 'Montserrat-Regular',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infobulle: {
    position: "absolute", 
    top: 50, 
    width: 260,
    height: 50, 
    backgroundColor: 'white',
    elevation: 4,
    zIndex: 10,
    borderRadius: 5,
    padding: 15,
  },
  triangle: {
    position: 'absolute',
    alignSelf: 'center', 
    top: -10,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderBottomColor: bgInput,  
    borderRightColor: 'transparent',  
  },
});
