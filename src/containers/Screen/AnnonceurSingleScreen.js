import React from 'react';
import { Image, Text, View, TouchableOpacity, ActivityIndicator, Linking } from 'react-native';
import { Icon, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import  MainLayout  from '../../components/Layout/MainLayout';
import { fetchAnnonceurDetail, fetchAnnonceurPromo } from '../../actions/annonceurs';
import {styleAnnonceursDetails} from '../../assets/Style/Screen/StyleAnnonceurDetail';
import { RibbonTitle } from '../../components/RibbonTitle';
import { ButtonLight } from '../../components/button';
import PromotionItem from '../../components/PromotionItem';
import NavigationService from '../NavigationService';
import { NavigationActions,StackActions } from 'react-navigation';

import ImageView from 'react-native-image-view';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Dimensions } from 'react-native'; 
import {iconColor, textColor} from '../../assets/Style/variables';

const sliderWidth = Dimensions.get('window').width;

function mapStateToProps( state ) {
  return {
    annonceurDetail: state.annonceurDetailReducer,
    annonceurPromo: state.annonceurPromoReducer,
  };
}

class AnnonceurSingleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      texteBtn: "Voir plus",
      class: 'close',
      numberLine: 5,
      load: true,

      isImageViewVisible: false,
      imageIndex: 0,
      //updated : false,
    };
  }

  componentDidMount() {
    this.forceUpdate();
    this.props.dispatch( fetchAnnonceurDetail(annonceurId) );
    this.props.dispatch( fetchAnnonceurPromo(annonceurId) );
  }



  get pagination () {
    const { entries, activeSlide = 0 } = this.state;
    const promo = this.props.annonceurPromo;
    let lenght= "";
    if ( promo == null ) {
      lenght = 3
    }
    else {
      lenght = promo.length;
    }
    return (
        <Pagination
          dotsLength={lenght}
          activeDotIndex={activeSlide}
          containerStyle={{ marginTop: -30, height: 20 }}
          dotContainerStyle={{ width: 10, height: 10 }}
          dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 10,
              marginHorizontal: 4,
              backgroundColor: iconColor
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}
  
  _renderItem ({item, index}) {
    return (
      <View style={{ height: 200 }}>
      <TouchableOpacity 
        style={{ flex: 1, alignItems: 'center', position: 'relative', }}
        onPress={() => {
          annonceurId = null;
          NavigationService.navigate("PromoEventSingle", {promoId : item.id}, {} , Math.random().toString(36).substr(2, 5));
        }}
      >
        <PromotionItem page="annonceur"  {...item } image={item.image} />
        <View style={{ backgroundColor: 'white', position: 'absolute', top: 15, zIndex: 2, width: '85%', elevation: 2, minHeight: 160, borderRadius: 5,}}></View>
        <View style={{ backgroundColor: 'white', position: 'absolute', top: 19, zIndex: 1, width: '80%', elevation: 1, minHeight: 160, borderRadius: 5,}}></View>
      </TouchableOpacity>
    </View>
    );
}


  setOpenText(etat) {
    this.setState({class: etat});

    if (etat == 'open') {
      this.setState({texteBtn: "Voir moins"})
      this.setState({numberLine: 1000});
    }
    else if(etat == 'close') {
      this.setState({texteBtn: "Voir plus"})
      this.setState({numberLine: 5});
    }
  }

    render() {
      if ( this.props.annonceurDetail == null ) {
        return (
          <MainLayout share page_single>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <ActivityIndicator size="large" color="#55bad4" />
            </View>
          </MainLayout>
        )
      }
      const annonceur = this.props.annonceurDetail[0];
      const promo = this.props.annonceurPromo;
      const images = [
        (annonceur.photoImage1 !== null ? { title : 1, source : { uri : global.baseImg + annonceur.photoImage1 } } : {title: 1}), 
        (annonceur.photoImage2 !== null ? { title : 2, source : { uri : global.baseImg + annonceur.photoImage2 } } : {title: 2}), 
        (annonceur.photoImage3 !== null ? { title : 3, source : { uri : global.baseImg + annonceur.photoImage3 } } : {title: 3}), 
        (annonceur.photoImage4 !== null ? { title : 4, source : { uri : global.baseImg + annonceur.photoImage4 } } : {title: 4}), 
        (annonceur.photoImage5 !== null ? { title : 5, source : { uri : global.baseImg + annonceur.photoImage5 } } : {title: 5}), 
        //(annonceur.photoImage6 !== null ? { title : 6, source : { uri : global.baseImg + annonceur.photoImage6 } } : {title: 6),               
      ];      
      
      
        return (
        <MainLayout share page_single title={annonceur.society} navigation={this.props.navigation}>
          <View style={styleAnnonceursDetails.contentImage}>
          {annonceur.category != null && <RibbonTitle 
            texte={ annonceur.category }
            top={25} 
            left={25} 
            cornerColor={'#b53a08'} 
            color={['#fa7236', '#ff0566']} // peut prendre plusieurs couleurs si besoin 
            textColor={'white'} 
            small
            large
            />}
            <Image 
            source={annonceur.leadImage == null ? (require('../../image/baseImage.jpg')) : {uri : global.baseImg + annonceur.leadImage}}
            style={styleAnnonceursDetails.image} 
            onLoadStart={() =>  this.setState({ load: true }) }
            onLoad={() =>  this.setState({ load: false }) }
            />
            {this.state.load == true && (
              <View style={{ position: "absolute", top: 150, left: "45%" }}>
                <ActivityIndicator size="large" color={iconColor} />
              </View>
            )}
          </View>
          <View style={styleAnnonceursDetails.content}>

            <Text style={styleAnnonceursDetails.title}>{ annonceur.society }</Text>
            
            <View style={styleAnnonceursDetails.bloc}>
              <Text style={styleAnnonceursDetails.subTitle}>Description</Text>
              <View>
                <Text numberOfLines={this.state.numberLine} style={{fontFamily: 'Poppins-Regular', fontSize: 12, color: textColor }}>
                  {annonceur.description}
                </Text>
                
                { annonceur.description.length > 235 && (<View style={{ width: 100, marginTop: 10 }}>
                  <TouchableOpacity 
                    onPress={ 
                      (this.state.class == 'close' ? (
                        () => this.setOpenText('open')
                      ) : (
                        () => this.setOpenText('close')
                      ))}
                  >
                    <ButtonLight texte={ this.state.texteBtn } />
                  </TouchableOpacity>
                  

                </View>)}
              </View>
            </View>

            <View style={styleAnnonceursDetails.bloc}>
              <Text style={styleAnnonceursDetails.subTitle}>Contact</Text>
              <View style={{ flexDirection: 'row' }}>

                <View style={{ width: "60%", marginRight: 5 }}>
                  <View style={styleAnnonceursDetails.contentRow}>
                    <Icon 
                      name='place'
                      type='FontAwesome'
                      color={iconColor}
                      size={15}
                    />          
                    <View style={{ textAlignVertical: 'top' }}>
                      <Text style={styleAnnonceursDetails.annonceur}>{annonceur.address}</Text>
                      <Text style={styleAnnonceursDetails.annonceur}>{annonceur.district}</Text>
                    </View>
                  </View>           
                  <View style={styleAnnonceursDetails.contentRow}>
                    <Icon 
                      name='phone'
                      type='FontAwesome'
                      color={iconColor}
                      size={15}
                    />          
                    <Text style={styleAnnonceursDetails.annonceur}>{annonceur.phone}</Text>
                  </View>                      
                  <View style={styleAnnonceursDetails.contentRow}>
                    <Icon 
                      name='email'
                      type='FontAwesome'
                      color={iconColor}
                      size={15}
                    />          
                    <Text style={styleAnnonceursDetails.annonceur}>{annonceur.email}</Text>
                  </View>                   
                </View>

                <View style={{ width: 120, marginLeft: 5 }}>
                {annonceur.website != null && (
                  <View style={styleAnnonceursDetails.contentRow}>
                    <Icon 
                      name='public'
                      type='FontAwesome'
                      color={iconColor}
                      size={15}
                    />          
                    <Text onPress={ ()=> Linking.openURL(annonceur.website).catch(err => console.error('An error occurred', err)) } style={styleAnnonceursDetails.annonceur}>Site web</Text>
                  </View> 
                )}
                  <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    {annonceur.facebook != null && (
                      <SocialIcon
                        type='facebook'
                        light
                        raised={false}
                        iconSize={25}
                        onPress={ ()=> Linking.openURL(annonceur.facebook).catch(err => console.error('An error occurred', err)) }
                      />  
                    )} 
                    {annonceur.twitter != null && (           
                      <SocialIcon
                        type='twitter'
                        light
                        raised={false}
                        iconSize={25}
                        iconColor={iconColor}
                        style={{ color: iconColor }}
                        onPress={ ()=> Linking.openURL(annonceur.twitter).catch(err => console.error('An error occurred', err)) }

                      /> 
                    )} 
                    {annonceur.instagram != null && (      
                      <SocialIcon
                        type='instagram'
                        light
                        raised={false}
                        iconSize={25}
                        onPress={ ()=> Linking.openURL(annonceur.instagram).catch(err => console.error('An error occurred', err)) }

                      />  
                    )} 
                    {/* {annonceur.snapchat != null && (         
                      <SocialIcon
                        type='snapchat'
                        iconColor={'#ffde00'}
                        raised={false}
                        iconSize={25}
                        style={{ width: 25}}
                        onPress={ ()=> Linking.openURL(annonceur.snapchat).catch(err => console.error('An error occurred', err)) }
                      />  
                    )} */}
                  </View>                 
                </View>

              </View>
            </View>

            <View style={styleAnnonceursDetails.bloc}>
              <Text style={styleAnnonceursDetails.subTitle}>Horaires</Text>
              <View style={styleAnnonceursDetails.horaire}>
                <Text style={{ color: textColor }}>{annonceur.openHours}</Text>
              </View>
            </View>

            {promo && (
              <View>
                <View style={styleAnnonceursDetails.blocPromo}>
                  <Text style={[styleAnnonceursDetails.subTitle, { paddingLeft: 15 }]}>Les promotions & événements en cours</Text>     
                  <View style={{ backgroundColor: 'white', width: '100%', height: 10, position: 'absolute', zIndex: 2, bottom: -5 }}></View>             
                </View>  
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={promo}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    />
                { this.pagination }
              </View>
              )}

            <View style={[styleAnnonceursDetails.bloc, {marginTop: 10}]}>
              <Text style={styleAnnonceursDetails.subTitle}>Photos</Text>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {images.map((image, index) => (
                  <TouchableOpacity
                    key={image.title}
                    onPress={() => {
                      this.setState({
                        imageIndex: index,
                        isImageViewVisible: true,
                      });
                    }}
                    style={styleAnnonceursDetails.imageGallery}
                  >
                  {image.source && 
                    <Image
                      style={{width: '100%', height: 100}}
                      source={image.source}
                      resizeMode="cover"
                  /> }
                  </TouchableOpacity>
                ))}
              </View>
              <ImageView
                glideAlways
                glideAlwaysDelay={200}
                images={images}
                imageIndex={this.state.imageIndex}
                animationType="fade"
                isVisible={this.state.isImageViewVisible}
                onClose={() => this.setState({isImageViewVisible: false})}
              />                       
            </View>          
          </View>        
        </MainLayout>
      )
  }
}



export default connect(mapStateToProps)(AnnonceurSingleScreen);