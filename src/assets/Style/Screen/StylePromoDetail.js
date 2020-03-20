import {Platform, StyleSheet} from 'react-native';
import { bgInput, textColor, subTitleColor } from '../variables';

export const stylePromoEvent = StyleSheet.create({
  contentImage: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    height: 260,
  },
  image: {
    width: "95%", 
    height: 235,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'transparent',
    zIndex: 3,
  },
  imageMiddle: {
    width: "90%", 
    height: 235,
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: 'transparent',
    zIndex: 2,    
    opacity: 0.5,
    position: 'absolute',
  },
  imageBottom: {
    width: "85%", 
    height: 235,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'transparent',
    zIndex: 1,    
    opacity: 0.2,
    position: 'absolute',
  },   
  
    // RIBBON PRICE
    ribbonPrice: {
      position: 'absolute', 
      left: 5, 
      top: 30,
      zIndex: 4,
    },
    triangleBack: {
      position: 'absolute',
      ...Platform.select({
        ios: {
          left: -3,
          top: 55,
        },
        android: {
          left: -3,
          top: 60,
        },
      }),      
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 2,
      borderRightWidth: 6,
      borderBottomWidth: 6,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: '#847c7c'      
    },
    ribbonBg: {
      paddingVertical: 5,
      paddingLeft: 15,
      paddingRight: 8,
      minHeight: 60,
      backgroundColor: 'white',
      ...Platform.select({
        ios: {
          minWidth: 90,
        },
        android: {
          minWidth: 80,
        },
      }), 
    },
    triangleAfter: {
      position: 'absolute',
      ...Platform.select({
        ios: {
          borderBottomWidth: 20,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          right: -30,
          top: 20,
        },
        android: {
          borderBottomWidth: 20,
          borderLeftWidth: 30,
          borderRightWidth: 30,
          right: -39,
          top: 20,
        },
      }),      
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderBottomColor: 'transparent',
      borderLeftColor: 'white',
      borderRightColor: 'white',
      transform: [
        {rotate: '-90deg'}
      ]      
    },  
    newPrices: {
      color: '#2bb34b',
      fontSize: 25,
      fontFamily: 'Montserrat-Regular',
    },
    prevPrices: {
      textAlign: "right",
      color: '#f55f89',
      textDecorationLine: 'line-through',
      fontSize: 16,
      marginTop: -5,
      fontFamily: 'Montserrat-Regular',
    },

    // CONTENT

    content: {
      flex: 1,
      paddingHorizontal: 30,
      marginBottom: 15,
    },  
    title: {
      fontSize: 28,
      color: textColor,
      marginBottom: 15,
      fontFamily: 'Montserrat-Regular',
    },
    contentRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    annonceur: {
      fontSize: 15,
      marginLeft: 8,
      color: textColor,     
      fontFamily: 'Poppins-Regular', 
    },      
    date: {
      backgroundColor: '#fffafa',
      borderColor: '#ff98a7',
      borderWidth: 1,
      borderRadius: 4,
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems: 'center',
      marginVertical: 20,
    },
    textDate: {
      color: textColor,
      fontSize: 16,
      fontFamily: 'Montserrat-Regular',
    },
    text: {
      fontFamily: 'Poppins-Regular', 
      marginBottom: 20, 
      color: textColor,
      lineHeight: 18,
      fontSize: 14,
    },
    contentText: {
      marginTop: 20,
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 5,
      elevation: 2,
    }
});
