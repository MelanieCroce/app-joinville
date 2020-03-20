import React from 'react';
import { Image, Text, View, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import  MainLayout  from '../../components/Layout/MainLayout';
import { fetchPromoDetail } from '../../actions/promotions';
import {stylePromoEvent} from '../../assets/Style/Screen/StylePromoDetail';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import NavigationService from '../NavigationService';

import { Dimensions } from 'react-native'; 
const sliderWidth = Dimensions.get('window').width;

import moment from 'moment';
import { ButtonCTA } from '../../components/button';
import {iconColor} from '../../assets/Style/variables';

function mapStateToProps( state ) {
  return {
      promotion : state.promoDetailReducer,
  };
}


class PromoEventSingleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      lenght: '',
      load1: true,
      load2: true,
      load3: true,
      isFetching: true,
    };
  };

	componentDidMount() {
    this.forceUpdate();
    this.props.dispatch(fetchPromoDetail(this.props.navigation.state.params.promoId));
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //    if (this.props.promotion != nextProps.promotion) {
  //      return true
  //    }
  // }

  get pagination () {
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={this.state.activeSlide}
        containerStyle={{ marginTop: -80 }}
        dotContainerStyle={{ width: 10, height: 10 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }


_renderItem = ({item, index}) => {

  return (
    <View>
      {item !== false && (
        <View style={stylePromoEvent.contentImage}>
          <Image 
          source={{uri : global.baseImg + item.name}}
          style={stylePromoEvent.image} />
          <Image 
          source={{uri : global.baseImg + item.name}}
          style={stylePromoEvent.imageMiddle} />
          <Image 
          source={{uri : global.baseImg + item.name}}
          style={stylePromoEvent.imageBottom} />
        </View>
      )}
      {item === false && (
        <View style={stylePromoEvent.contentImage}>
          {this.state.load1 == true && (
            <View style={{ position: "absolute", top: 150, left: "45%" }}>
              <ActivityIndicator size="large" color="#55bad4" />
            </View>
          )}
          <Image 
          source={(require('../../image/baseImage.jpg'))}
          style={stylePromoEvent.image} 
          onLoadStart={() =>  this.setState({ load1: true }) }
          onLoad={() =>  this.setState({ load1: false }) }
          />
          {this.state.load2 == true && (
            <View style={{ position: "absolute", top: 150, left: "45%" }}>
              <ActivityIndicator size="large" color="#55bad4" />
            </View>
          )}
          <Image 
          source={(require('../../image/baseImage.jpg'))}
          style={stylePromoEvent.imageMiddle} 
          onLoadStart={() =>  this.setState({ load2: true }) }
          onLoad={() =>  this.setState({ load2: false }) }
          />
          {this.state.load3 == true && (
            <View style={{ position: "absolute", top: 150, left: "45%" }}>
              <ActivityIndicator size="large" color="#55bad4" />
            </View>
          )}
          <Image 
          source={(require('../../image/baseImage.jpg'))}
          style={stylePromoEvent.imageBottom} 
          onLoadStart={() =>  this.setState({ load3: true }) }
          onLoad={() =>  this.setState({ load3: false }) }
          />
        </View>
      )}
    </View>
  );
}

    render() {
      if (this.props.promotion) this.setState.isFetching == false 
      if ( this.props.promotion == null  && this.state.isFetching == true) {
        return ( 
          <MainLayout share page_single>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <ActivityIndicator size="large" color={iconColor} />
            </View>
          </MainLayout>
        )
      }


      const promo = this.props.promotion.promotion;  
      const date_end = moment(promo.date_end).format("DD/MM/YYYY HH:mm");
      const date_start = moment(promo.date_start).format("DD/MM/YYYY HH:mm");
      return (
      <MainLayout share page_single title={promo.name} navigation={this.props.navigation}>
        <View style={stylePromoEvent.contentImage}>
          { promo.promo_price != 0 && (
            <View style={stylePromoEvent.ribbonPrice}>
              <View style={stylePromoEvent.triangleBack}></View>
                <View style={stylePromoEvent.ribbonBg}>
                  <View style={stylePromoEvent.ribbonText}>
                    <Text style={stylePromoEvent.newPrices}>
                      {promo.promo_price}
                      {promo.promo_price.indexOf('%') == -1 ? "€" : ""}
                    </Text>
                    {promo.real_price != null && promo.real_price != 0 && <Text style={stylePromoEvent.prevPrices}>{promo.real_price}€</Text>}
                  </View>
                </View>
                <View style={stylePromoEvent.triangleAfter}></View>
            </View>
          )}
          {this.state.load1 == true && (
            <View style={{ position: "absolute", top: 150, left: "45%" }}>
              <ActivityIndicator size="large" color={iconColor} />
            </View>
          )}
          { promo.image2 === null && promo.image3 === null && (
          <Image 
            source={promo.image1 == null ? (require('../../image/baseImage.jpg')) : {uri : global.baseImg + promo.image1}}
            style={stylePromoEvent.image} 
            onLoadStart={() =>  this.setState({ load1: true }) }
            onLoad={() =>  this.setState({ load1: false }) }
            />
          )}
          { promo.image2 !== null && (
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={
              [
            (promo.image1 !== null && { id : 1, name : promo.image1 }),
            (promo.image2 !== null && { id : 2, name : promo.image2 }),
            (promo.image3 !== null && { id : 3, name : promo.image3 }),
          ]}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            />
            )}
            { this.pagination }
            
            
        </View>
        <View style={stylePromoEvent.content}>

          <Text style={stylePromoEvent.title}>{promo.name}</Text>
          <TouchableOpacity onPress={ () => {
            NavigationService.navigate('AnnonceurSingle', annonceurId =  promo.userId, {}, Math.random().toString(36).substr(2, 5));
          }} 
          >
            <View style={stylePromoEvent.contentRow}>
              <Icon 
                name='person'
                type='FontAwesome'
                color={iconColor}
                size={19}
              />
              <Text style={stylePromoEvent.annonceur}>{promo.society}</Text>
            </View>
          </TouchableOpacity>
          <View style={stylePromoEvent.contentRow}>
            <Icon 
              name='place'
              type='FontAwesome'
              color={iconColor}
              size={18}
            />          
            <Text style={stylePromoEvent.annonceur}>{promo.address}</Text>
          </View>
          <View style={stylePromoEvent.date}>
            {promo.event == true ? 
              <View>
                <Text style={stylePromoEvent.textDate}>Début : {date_start}</Text>
                <Text style={stylePromoEvent.textDate}>Fin : {date_end}</Text>
              </View>
            : 
              <Text style={stylePromoEvent.textDate}>Valable Jusqu'au : {date_end}</Text>
            }
          </View>
          { promo.external_link && 
            <TouchableOpacity style={{  }} onPress={()=> Linking.openURL(promo.external_link).catch(err => console.error('An error occurred', err))} >
              <ButtonCTA large texte={promo.event == true ? " En savoir plus" : "J'en profite"} />
            </TouchableOpacity>
          }
          <View style={stylePromoEvent.contentText}>
            <Text style={stylePromoEvent.text}>
              {promo.text} 
            </Text>
          </View>
        </View>        
      </MainLayout>
    )
  }
}

export default connect(mapStateToProps)(PromoEventSingleScreen);