import {Platform, StyleSheet} from 'react-native';
import { titleColor, subTitleColor } from '../variables';

export const stylePromotion = StyleSheet.create({
    container: {
      width: '90%',
      flexDirection: "row",
      backgroundColor: 'white',
      marginHorizontal: 25,
      marginVertical: 10,
      borderRadius: 5,
      padding: 15,
      elevation: 3,
      // IOS
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 8,
      minHeight: 200,
      position: 'relative',
      
    },
    title: {
      color: titleColor,
      fontSize: 18,
      fontFamily: "Montserrat-Regular",
    },
    subTitle: {
      fontSize: 12,
      color: subTitleColor,
      marginBottom: 8,
    },
    bloc: {
      marginLeft: 15,
      width: '55%',
    },
    image: {
      width: 100, 
      height: 100,
      borderRadius: 4,
      marginTop: 40,
    },
    contentRow: {
      flexDirection: 'row',
    },
    annonceur: {
      fontSize: 13,
      marginLeft: 5,
      color: '#000000',      
    },
    description: {
      fontSize: 12,
      marginTop: 10,
      color: '#000000',
      width: '55%',
    },
    prices: {
      textAlign: 'right',
      position: 'absolute',
      ...Platform.select({
        ios: {
          right: -30,        
        },
        android: {
          right: -40,
        }
      })
    },
    newPrices: {
      color: '#2bb34b',
      fontSize: 20,
      fontFamily: "Montserrat-Regular",
    },
    prevPrices: {
      textAlign: 'right',
      color: '#f55f89',
      textDecorationLine: 'line-through',
      fontSize: 14,
      fontFamily: "Montserrat-Regular",
    },
    date: {
      position: 'absolute',
      bottom: 0,
      ...Platform.select({
        ios: {
          right: -30,        
        },
        android: {
          right: -40,
        }
      }),
      backgroundColor: '#fffafa',
      borderColor: '#ff98a7',
      borderWidth: 1,
      borderRadius: 2,
      paddingTop: 10,
      paddingHorizontal: 10,
      paddingBottom: 5,
    },
    dateTitle: {
      position: 'absolute',
      backgroundColor: "white",
      borderColor: '#ff98a7',
      borderWidth: 1,
      ...Platform.select({
        ios: {
          borderRadius: 10,
        },
        android: {
          borderRadius: 20,
        },
      }),
      left: 10,
      top: -10,
      width: 80,
      textAlign: 'center',
      color: '#465a7e',
      fontSize: 12,
    },
    textDate: {
      color: '#465a7e',
      fontSize: 15,
      fontFamily: "Montserrat-Regular",
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
      width: 130,
    },
    ribbonText: {
      color: 'white',
      fontSize: 13,
    }, 
    triangleAfter: {
      position: 'absolute',
      right: -8,
      top: 6,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 15,
      borderRightWidth: 15,
      borderBottomWidth: 15,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'white',
      transform: [
        {rotate: '-90deg'}
      ]      
    },
});
