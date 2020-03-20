import {Platform, StyleSheet} from 'react-native';

export const styleRibbon = StyleSheet.create({

    triangleBack: {
      position: 'absolute',
      ...Platform.select({
        ios: {
          left: -30,
          top: 17,
          borderLeftWidth: 5,
          borderRightWidth: 10,
          borderBottomWidth: 10,
        },
        android: {
          left: -30,
          top: 23,
          borderLeftWidth: 5,
          borderRightWidth: 10,
          borderBottomWidth: 10,
        },
      }),      
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',

      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    ribbonBg: {
      paddingVertical: 5,
      paddingLeft: 15,
      paddingRight: 5,
      minWidth: 110,
    },
    ribbonText: {
      fontSize: 13,
      fontFamily: "Montserrat-Regular",
    }, 
    triangleAfter: {
      position: 'absolute',
      right: -18,
      top: 8.80,
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderBottomWidth: 10,
      borderBottomColor: 'transparent',
      borderLeftWidth: 13.75,
      borderRightWidth: 13.65,
      transform: [
        {rotate: '-90deg'}
      ]      
    }, 
});
