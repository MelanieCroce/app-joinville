import {StyleSheet} from 'react-native';

export const stylesConnexion = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%', 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    color: '#fff',
    position: 'relative',
    top: -20    
  },
  inputLogin: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '65%',
    borderRadius: 30,
    height: 50,
    textAlign: 'center',
    color: '#fff',
    borderBottomWidth: 0,
    marginVertical: 5,
    fontSize: 15
  },
  link: {
    marginTop: 20,
    color: '#fff',
  },  
})