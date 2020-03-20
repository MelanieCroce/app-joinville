import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NavigationService from '../NavigationService';
import {connect} from 'react-redux';

import {styleHome} from '../../assets/Style/Screen/StyleHome';
import { StyleLayout } from '../../assets/Style/Components/StyleLayout';

import PromotionItem from '../../components/PromotionItem';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Dimensions } from 'react-native'; 
import { getPromoHome } from '../../actions/home';
import {iconColor} from '../../assets/Style/variables';

const sliderWidth = Dimensions.get('window').width;

class HomeScreen extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch(getPromoHome());
} 

state = {
  activeSlide: 0
};

get pagination () {
  const lenght = this.props.promo.length;
  return (
    <Pagination
      dotsLength={lenght}
      activeDotIndex={this.state.activeSlide}
        containerStyle={{ marginTop: -70 }}
        dotContainerStyle={{ width: 10, height: 10 }}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            marginHorizontal: 8,
            backgroundColor: iconColor
        }}
        inactiveDotStyle={{
            backgroundColor: "#dce0e2"
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
  );
}

  _renderItem ({item, index}) {
    return (
      <View style={{ height: 230 }}>
      <TouchableOpacity 
        style={{ flex: 1, alignItems: 'center', position: 'relative', }}
        onPress={() => { NavigationService.navigate("PromoEventSingle", {promoId: item.id}, {} , Math.random().toString(36).substr(2, 5) ) }}
      >
        <PromotionItem page="home" { ...item } image={item.image} />
        <View style={{ backgroundColor: 'white', position: 'absolute', top: 15, zIndex: 2, width: '85%', elevation: 2, shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 5, minHeight: 160, borderRadius: 5,}}></View>
        <View style={{ backgroundColor: 'white', position: 'absolute', top: 19, zIndex: 1, width: '80%', elevation: 1, minHeight: 160, borderRadius: 5,}}></View>
      </TouchableOpacity>
    </View>
    );
}

  render() {
    return (
      <MainLayout typePage="Home" title="Accueil" navigation={this.props.navigation}>
      <View style={styleHome.linkImg}>
            <View style={styleHome.borderImg}>
              <TouchableOpacity
                onPress={() => { NavigationService.navigate("PromosEvents") }}
              >
                <Image 
                  source={require('../../image/promo_home.jpeg')}
                  style= {{
                    width: 180,
                    height: 180,
                    borderRadius: 5,
                    opacity: 0.5
                  }}
                />
                <View style={styleHome.textImg}>
                  <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, textTransform: 'uppercase' }}>Promotions & Événement</Text>
                </View>
              </TouchableOpacity>
            </View>
          

            <View style={styleHome.borderImg}>
              <TouchableOpacity
                onPress={() => { NavigationService.navigate("Annonceurs", search='') }}
              >
                <Image 
                  source={require('../../image/annonceur_home.jpeg')}
                  style= {{
                    width: 180,
                    height: 180,
                    borderRadius: 5,
                    opacity: 0.5
                  }}
                />
                <View style={styleHome.textImg}>
                  <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, textTransform: 'uppercase' }}>Les professionnels</Text>
                </View>
              </TouchableOpacity>   
            </View> 
          </View>
        <View style={StyleLayout.body}>
          <Text style={{textAlign: 'center', fontSize: 18}}>Les annonces qui expirent bientôt</Text>
          <View style={styleHome.container}>
            <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.props.promo}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            />
            { this.pagination }            
          </View>     
     
        </View>
      </MainLayout>
    );
  }
}

function mapStateToProps( state ) {
  return {
      promo: state.getPromoHomeReducer,
  };
}

export default connect(mapStateToProps)(HomeScreen);