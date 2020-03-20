import {StyleSheet} from 'react-native';

export const styleHome = StyleSheet.create({
    container: {
      flex: 0,
      alignItems: 'center',
    },
    contentContainer: {
      shadowOffset: { width: 10, height: 10 },  
      shadowColor: 'black',  
      shadowOpacity: 1,      
      backgroundColor: '#fff',
      elevation: 10,
      flexDirection: 'row',
      width: "80%",
      marginBottom: 50,
    },
    linkImg: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 0,
      marginBottom: 15,
    },
    borderImg: {
      backgroundColor: '#343e4e',
      
      // Ombre IOS 
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowRadius: 5,
  
      // Ombre Android
      elevation: 10, 
      borderRadius: 5,
    },  
    textImg: {
      position: 'absolute', 
      width: "100%",    
      height: '100%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center', 
      fontFamily: "Montserrat-Regular",
    }
  });