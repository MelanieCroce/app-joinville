import React from 'react';
import { Text, View, ScrollView, Image, StatusBar, TouchableOpacity, Share } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';
import LinearGradient from 'react-native-linear-gradient';
import HeaderLayout from './HeaderLayout';
import { gradiantColor1, gradiantColor2 } from '../../assets/Style/variables';

import { StyleLayout } from '../../assets/Style/Components/StyleLayout';
import Search from '../Popup/Search';
import {city} from '../../assets/Style/variables';

export default class MainLayout extends React.Component {

    handlePress() {
        Share.share({
            message: " Installe l'application Joinville Connect pour connaitre les promotions et événements des commerçant de la ville ! " ,
            url: 'https://joinville-connect.fr', // IOS only
            title: 'Application Joinville Connect'
            }, {
            // Android only:
            dialogTitle: "Partagez l'application à vos proches",
            // iOS only:
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }

    
    render() {
        var urlImgLogo = {
            1 : require('../../image/1/logo-white.png'),
            2 : require('../../image/2/logo-white.png')
          };
        const header = this.props.typePage;
        return (
            <View style={{ flex: 1 }}>

                <StatusBar backgroundColor={'transparent'} translucent />
                <LinearGradient
                colors={[gradiantColor1, gradiantColor2]}
                start={{x:0.2,y:-0.2}} 
                end={{x:1,y:0.5}}
                style={{backgroundColor: 'transparent', elevation: 2, paddingBottom: 10}}
                >
                    <Image 
                        source={urlImgLogo[city]} 
                        style={[StyleLayout.logo, 
                            (header == 'Page' ? { height: 220 } : { height: 150 } ),
                            (header == 'Connexion' && { height: 330, width: "88%" } )
                        ]}
                        />                 
                    <View styles={StyleLayout.container}>
                        <Header
                            outerContainerStyles={StyleLayout.header}
                            leftComponent={
                                <View style={StyleLayout.menu}>
                                    {this.props.page_single ? (
                                        <Icon
                                        name='arrow-back'
                                        type='FontAwesome'
                                        color='#fff' 
                                        onPress={() => { this.props.navigation.goBack(this.props.navigation.state.key) } }
                                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                        /> 
                                    ) : (
                                        <Icon
                                        name='menu'
                                        color='#fff' 
                                        onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) } }
                                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                        />
                                    )}
                                    
                                    <Text style={StyleLayout.menutext}>{this.props.title}</Text>
                                    
                                </View>
                            } 
                            rightComponent={
                                <View>
                                    {this.props.search && (
                                        <Search type={this.props.search} />
                                    )}
                                    {this.props.share && (
                                        <TouchableOpacity onPress={this.handlePress} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                                            <Icon
                                            name='md-share-alt'
                                            type='ionicon'
                                            color='#fff' 
                                            />
                                        </TouchableOpacity>
                                        
                                    )}    
                                </View>
                            }
                        />
                    </View>
                    {header != "Home" ? (
                        <HeaderLayout type={this.props.typePage} />
                    ) : ( null )}
                </LinearGradient>
                <ScrollView style={StyleLayout.content}>
                {header == "Home" && <HeaderLayout type={this.props.typePage} />}
                    {this.props.children}
                </ScrollView>
            </View>
        );
    };
};

