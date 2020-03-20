import {StyleSheet} from 'react-native';
import { titleColor, textColor } from '../variables';

export const styleAnnonceurs = StyleSheet.create({
    container: {
      //flex: 1,
      //width: '100%',
      flexDirection: 'column',
      backgroundColor: 'white',
      marginHorizontal: 25,
      marginVertical: 10,
      borderRadius: 5,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 10,
      minHeight: 325,
      paddingBottom: 15,
      position: 'relative',
    },
    title: {
      color: titleColor,
      fontSize: 20,
      marginBottom: 5
    },
    bloc: {
      marginVertical: 15,
      marginLeft: 15,
      width: "90%",
    },
    image: {
      width: '100%', 
      height: 180,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    contentRow: {
      flexDirection: 'row',
      textAlignVertical: 'top'
    },
    annonceur: {
      fontSize: 13,
      marginLeft: 5,
      color: textColor, 
      width: 220,     
    },
    description: {
      fontSize: 13,
      marginTop: 10,
      color: textColor,
      marginBottom: 15,
    },


    // RIBBON CATEGORIE

    triangleBack: {
      position: 'absolute',
      left: -30,
      top: 23,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 5,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: '#b53a08'      
    },
    ribbonBg: {
      paddingVertical: 5,
      paddingLeft: 25,
      width: 100,
    },
    ribbonText: {
      color: 'white',
      fontSize: 13,
    }, 
    triangleAfter: {
      position: 'absolute',
      right: -19,
      top: 9,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderBottomWidth: 10,
      borderBottomColor: 'transparent',
      borderLeftWidth: 14,
      borderLeftColor: '#ff0566',
      borderRightWidth: 14,
      borderRightColor: '#ff0566',
      transform: [
        {rotate: '-90deg'}
      ]      
    }, 
});
