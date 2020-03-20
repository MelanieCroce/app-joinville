import {StyleSheet} from 'react-native';
import { titleColor } from '../variables';

export const StyleFilter = StyleSheet.create({  
  
  ListFilter: {
      marginLeft: 10,
      marginBottom: 10
    },
    filter: {
      marginHorizontal: 5,
      marginVertical: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderColor: 'rgba(255,255,255,.5)',
      borderWidth: 1,
      borderRadius: 5,
    },
    actived: {
      backgroundColor: 'white',
      color: titleColor,
      overflow: "hidden",
    }
});
