import {StyleSheet} from 'react-native';
import { activeBtn, textMenu  } from '../variables';

export const styleSidebar = StyleSheet.create({
    container: {
        position: 'absolute', 
        width: "100%",  
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    logo: {
        width: 145, height: 135,
        marginTop: 45,
        marginBottom: 50,
        marginHorizontal: 55
    },
    linkMenu: {
        flex: 0,
        flexDirection: 'row',   
        alignItems: 'center',   
        backgroundColor: '#fff',
        width: 250,
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        elevation: 2,
        borderRadius: 5,
    },
    textLink: {
        color: textMenu,
        textAlign: 'left',
        fontSize: 14,
        paddingLeft: 10,
    },
    socialMedia: {
        position:'absolute',
        bottom: 10,
        left: 10
    },
    activeText: {
        color: '#fff',
    },
    activeBg: {
        backgroundColor: activeBtn
    },
});