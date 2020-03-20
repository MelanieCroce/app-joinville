import {Platform, StyleSheet} from 'react-native';
import { bgHeaderSlider, bgHomeFilter } from '../variables';

export const StyleHeader = StyleSheet.create({
    container: {
      flex: 1,
    },
    slider: {
      backgroundColor: bgHeaderSlider,
      marginBottom: 20
    },
    title: {
      color: '#fff',
      fontSize: 30,
      textAlign: 'center',
      width: "75%",
      marginTop: 10,
    },
    text: {
      textAlign: 'center',
      width: "75%",
    },   

    // searchBar: {
    //     width: "100%",   
    //     justifyContent: 'center',
    //     alignItems: 'center',     
    // },  
    // titleSearch: {
    //     color: '#fff',
    //     fontSize: 20,
    //     textAlign: 'center',
    //     marginTop: 10,
    //     marginBottom: 20,
    // },
    // inputSearch: {
    //   backgroundColor: '#fff',
    //   width: '100%',
    //   borderRadius: 30,
    //   height: 50,
    //   paddingVertical: 15,
    //   fontSize: 18,
    //   textAlign: 'center',
    //   color: '#465a7e',
    //   borderBottomWidth: 0,
    //   ...Platform.select({
    //     ios: {
    //       position: 'relative',
    //     },
    //     android: {
    //       elevation: 5,
    //       zIndex: 9999,
    //     },
    //   }), 
    // },  
    
    ListFilter: {
      marginLeft: 10,
      marginBottom: 10
    },
    filter: {
      color: "#fff",
      fontSize: 12,
      marginHorizontal: 5,
      marginVertical: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderColor: bgHomeFilter,
      borderWidth: 1,
      borderRadius: 5,
    }
  });
