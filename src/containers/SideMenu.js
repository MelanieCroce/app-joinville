import React from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, Share, AsyncStorage, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';

import NavigationService from './NavigationService';

import { styleSidebar } from '../assets/Style/Components/StyleSidebar';

import {city} from '../assets/Style/variables';

class SideMenu extends React.Component {

  // handlePress() {
  //   Share.share({
  //       message: "Installe l'application St Maur Promo pour connaitre tous les événements de la ville ! http://google.com " ,
  //       url: 'http://google.com', // IOS only
  //       title: 'Application St Maur Promo'
  //       }, {
  //       // Android only:
  //       dialogTitle: "Partagez l'application à vos proches",
  //       // iOS only:
  //       excludedActivityTypes: [
  //           'com.apple.UIKit.activity.PostToTwitter'
  //       ]
  //   })
  // } 
  render() {
    var urlImgBG = {
      1 : require('../image/1/bg-menu.jpg'),
      2 : require('../image/2/bg-menu.jpg')
    };
    var urlImgLogo = {
      1 : require('../image/1/logo.png'),
      2 : require('../image/2/logo.png')
    };
    var urlImgHome = {
      1 : {
        normal : require('../image/1/menu/home.png'),
        active : require('../image/1/menu/home-active.png'),
      },
      2 : {
        normal : require('../image/2/menu/home.png'),
        active : require('../image/2/menu/home-active.png'),
      },
    };
    var urlImgAnnonceur = {
      1 : {
        normal : require('../image/1/menu/annonceurs.png'),
        active : require('../image/1/menu/annonceurs-active.png'),
      },
      2 : {
        normal : require('../image/2/menu/annonceurs.png'),
        active : require('../image/2/menu/annonceurs-active.png'),
      },
    };
    var urlImgPromoEvent = {
      1 : {
        normal : require('../image/1/menu/promo-events.png'),
        active : require('../image/1/menu/promo-events-active.png'),
      },
      2 : {
        normal : require('../image/2/menu/promo-events.png'),
        active : require('../image/2/menu/promo-events-active.png'),
      },
    };
    var urlImgConnexion = {
      1 : {
        normal : require('../image/1/menu/connexion.png'),
        active : require('../image/1/menu/connexion-active.png'),
      },
      2 : {
        normal : require('../image/2/menu/connexion.png'),
        active : require('../image/2/menu/connexion-active.png'),
      },
    };
    var urlImgAbout = {
      1 : {
        normal : require('../image/1/menu/about.png'),
        active : require('../image/1/menu/about-active.png'),
      },
      2 : {
        normal : require('../image/2/menu/about.png'),
        active : require('../image/2/menu/about-active.png'),
      },
    };
    return (
      <View>
        <ImageBackground
          source={urlImgBG[city]}
          style={{ width: '100%', height: '100%', zIndex: 2 }}
        >
          
          <View style={styleSidebar.container}>
            <View>
              <Image
                source={urlImgLogo[city]}
                style={styleSidebar.logo}
              />
              <View>

                <TouchableOpacity style={[
                  styleSidebar.linkMenu,
                  (this.props.currentScreen === 'Home' ? styleSidebar.activeBg : {})
                ]}
                  onPress={() => { NavigationService.navigate("Home") }} >
                  <Image
                    source={
                      (this.props.currentScreen === 'Home' ? (
                        urlImgHome[city]['active']
                      ) : (
                        urlImgHome[city]['normal']
                        ))
                    }
                    style={{ width: 25, height: 25 }}
                  />
                  <Text style={[
                    styleSidebar.textLink,
                    (this.props.currentScreen === 'Home' ? styleSidebar.activeText : {})
                  ]}>Accueil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styleSidebar.linkMenu,
                    (this.props.currentScreen === 'Annonceurs' ? styleSidebar.activeBg : {})
                  ]}
                  onPress={() => { NavigationService.navigate("Annonceurs", '', {}, Math.random().toString(36).substr(2, 5))}}>
                  <Image
                    source={
                      (this.props.currentScreen === 'Annonceurs' ? (
                        urlImgAnnonceur[city]['active']
                      ) : (
                        urlImgAnnonceur[city]['normal']
                        ))
                    }
                    style={{ width: 25, height: 25 }}
                  />
                  <Text style={[
                    styleSidebar.textLink,
                    (this.props.currentScreen === 'Annonceurs' ? styleSidebar.activeText : {})
                  ]}>Les professionnels</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styleSidebar.linkMenu,
                    (this.props.currentScreen === 'PromosEvents' ? styleSidebar.activeBg : {})
                  ]}
                  onPress={() => { NavigationService.navigate("PromosEvents", '', {}, Math.random().toString(36).substr(2, 5)) }}>
                  <Image
                    source={
                      (this.props.currentScreen === 'PromosEvents' ? (
                        urlImgPromoEvent[city]['active']
                      ) : (
                        urlImgPromoEvent[city]['normal']
                        ))
                    }
                    style={{ width: 25, height: 25 }}
                  />
                  <Text style={[
                    styleSidebar.textLink,
                    (this.props.currentScreen === 'PromosEvents' ? styleSidebar.activeText : {})
                  ]}>Les promotions & événements</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styleSidebar.linkMenu,
                    (this.props.currentScreen === 'Login' ? styleSidebar.activeBg : {})
                  ]}
                  onPress={() => { 
                    AsyncStorage.getItem('id_token').then((token) => {
                      if(token == null){
                        NavigationService.navigate('Login');
                      }else{
                        NavigationService.navigate('EspaceAnnonceur');
                      }
                    })
                    
                  }} >
                  <Image
                    source={
                      (this.props.currentScreen === 'Login' ? (
                        urlImgConnexion[city]['active']
                      ) : (
                        urlImgConnexion[city]['normal']
                        ))
                    }
                    style={{ width: 25, height: 27 }}
                  />
                  <Text style={[
                    styleSidebar.textLink,
                    (this.props.currentScreen === 'Login' ? styleSidebar.activeText : {})
                  ]}>Mon compte</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[
                  styleSidebar.linkMenu,
                  (this.props.currentScreen === 'About' ? styleSidebar.activeBg : {})
                ]}
                  onPress={() => { NavigationService.navigate('About') }} >
                  <Image
                    source={
                      (this.props.currentScreen === 'About' ? (
                        urlImgAbout[city]['active']
                      ) : (
                        urlImgAbout[city]['normal']
                        ))
                    }
                    style={{ width: 30, height: 25 }}
                  />
                  <Text style={[
                    styleSidebar.textLink,
                    (this.props.currentScreen === 'About' ? styleSidebar.activeText : {})
                  ]}>Qui sommes-nous ?</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
          <View style={styleSidebar.socialMedia}>
            <TouchableOpacity onPress={()=> Linking.openURL('https://www.facebook.com/pg/joinvilleconnect/').catch(err => console.error('An error occurred', err))} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <SocialIcon
                type='facebook'
                raised={true}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default SideMenu;
