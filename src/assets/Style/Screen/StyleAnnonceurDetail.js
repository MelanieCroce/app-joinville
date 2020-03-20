import {StyleSheet} from 'react-native';
import { textColor, textDropDown, subTitleColor } from '../variables';

export const styleAnnonceursDetails = StyleSheet.create({
  contentImage: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
    elevation: 3
  },
  image: {
    width: "95%", 
    height: 235,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'transparent',
    zIndex: 3,
  },

  // CONTENT

  content: {
    flex: 1,
    marginBottom: 15,
  },  
  title: {
    fontSize: 28,
    color: textColor,
    marginVertical: 15,
    marginHorizontal: 20,     
    fontFamily: 'Montserrat-Regular' 
  },
  bloc: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  subTitle: {
    fontSize: 15,
    color: textDropDown,
    marginBottom: 10,
    fontFamily: 'Montserrat-Regular' ,
  },
  contentRow: {
    flexDirection: 'row',
    marginVertical: 3
  },
  annonceur: {
    fontSize: 13,
    marginLeft: 5,
    color: textColor,    
    fontFamily: 'Poppins-Regular'  
  },    
  horaire: {
    borderRadius: 3,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginLeft: 4,
    lineHeight: 8,
  },
  textHoraire: {
    color: textColor,
    fontFamily: 'Poppins-Regular' 
  },
  blocPromo: {
    paddingTop: 15,
    //paddingLeft: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: -15,
    elevation: 2,
    position: 'relative',
    zIndex: 1
  },

  imageGallery: {
    width: "30%",
    marginHorizontal: 5,
    marginVertical: 5
  },
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
});
