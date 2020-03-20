import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import {stylePromotion} from '../assets/Style/Components/StylePromotion';

import moment from 'moment';

import {RibbonTitle} from './RibbonTitle';
import {iconColor} from '../assets/Style/variables';

export default class PromotionItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      load: true,
    };
  };

  render() {
    const promotion = {...this.props};

    const date_end = moment(promotion.date_end).format("DD/MM HH:mm");
    return (
      <View style={
        [stylePromotion.container, 
        (this.props.page == "home" || this.props.page == "annonceur" ? { 
          minHeight: 160, position: 'absolute', zIndex: 4, top: 0 
          } : {}),
        (this.props.page == "annonceur" ? { 
          borderRadius: 0, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, 
          elevation: 3,  position: 'absolute', zIndex: 4, top: 0 
          } : {}) 
        ]}>
          <View>
            <RibbonTitle 
              texte={ (promotion.event == true ? "Événement" : "Promotion" ) } 
              top={5} 
              left={0} 
              cornerColor={(promotion.event == false ? ('#b53a08') : ('#440984'))} 
              color={(promotion.event == false ? (['#fa7236', '#ff0566']) : ( ['#2575fc', '#6a11cb'] ))} 
              textColor={'white'} 
              small
            />
            <Image 
            source={promotion.image == null ? (require('../image/baseImage.jpg')) : {uri : global.baseImg + promotion.image}}
            style={[
              stylePromotion.image, 
              (this.props.page == "home" ? { width: 80, height: 80, } : {}), 
            ]} 
            onLoadStart={() =>  this.setState({ load: true }) }
            onLoad={() =>  this.setState({ load: false }) }
              />
            {this.state.load == true && (
              <View style={{ position: "absolute", top: 50, left: 20 }}>
                <ActivityIndicator size="large" color="#55bad4" />
              </View>
            )}
          </View>
          <View style={[
            stylePromotion.bloc, 
            (this.props.page == "home" ? { width: '60%', marginLeft: 20 } : {}),
            ]}>
            <View style={{ width: '80%' }}>
              <Text style={stylePromotion.title}>{ promotion.name }</Text>
            </View>
            <Text style={stylePromotion.subTitle}>{ promotion.category }</Text>
            { this.props.page != "annonceur" ? (
              <View>
                <View style={stylePromotion.contentRow}>
                  <Icon 
                    name='person'
                    type='FontAwesome'
                    color={iconColor}
                    size={18}
                  />
                  <Text style={stylePromotion.annonceur}>{ promotion.society }</Text>
                </View>
                <View style={stylePromotion.contentRow}>
                  <Icon 
                    name='place'
                    type='FontAwesome'
                    color={iconColor}
                    size={18}
                  />          
                  <Text style={[
                    stylePromotion.annonceur, 
                    (this.props.page == "home" ? { width: 120 } : {}), 
                    ]}>
                      { promotion.address }
                    </Text>
                </View>
              </View>
              ) : ( null ) }
              { ( this.props.page == "list" || this.props.page == "annonceur" ) && 
                <Text
                  numberOfLines={this.props.page == 'annonceur' ? 4 : 6 } 
                  style={[stylePromotion.description, 
                  (this.props.page == 'annonceur' ? { 
                    marginTop: 0, marginBottom: 10
                  } : {}) ]}>{ promotion.text }</Text>
              }
          </View>
          <View>
            <View style={stylePromotion.prices}>
              { promotion.promo_price != 0 && (
                <Text style={stylePromotion.newPrices}>
                { promotion.promo_price }
                {promotion.promo_price.indexOf('%') == -1 ? "€" : ""}</Text>
              )}
              { promotion.real_price != null && promotion.real_price != 0  && <Text style={stylePromotion.prevPrices}>{ promotion.real_price }€</Text>}
            </View>
            <View style={stylePromotion.date}>
              <Text style={stylePromotion.dateTitle}>Jusqu'au</Text>
              <Text style={stylePromotion.textDate}>
                { date_end }
              </Text>
            </View>
          </View>
      </View>
    )
  }
}
