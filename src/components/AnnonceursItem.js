import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import {styleAnnonceurs} from '../assets/Style/Components/StyleAnnonceurs';

import {RibbonTitle} from './RibbonTitle';

import {ButtonLight} from './button';
import {iconColor} from '../assets/Style/variables';

export default class PromotionItem  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
    };
  };

  render() {

    return (
     <View style={styleAnnonceurs.container}>
        <View>
          <RibbonTitle 
            texte={ (this.props.category == null ? 'Catégorie' : this.props.category) }
            top={10} 
            left={15} 
            cornerColor={'#b53a08'} 
            color={['#fa7236', '#ff0566']} 
            textColor={'white'} 
          />
          <Image 
           source={this.props.leadImage == null ? (require('../image/baseImage.jpg')) : {uri : global.baseImg + this.props.leadImage}}
          style={styleAnnonceurs.image}             
          onLoadStart={() =>  this.setState({ load: true }) }
          onLoad={() =>  this.setState({ load: false }) }
            />
          {this.state.load == true && (
            <View style={{ position: "absolute", top: 50, left: '45%' }}>
              <ActivityIndicator size="large" color="#55bad4" />
            </View>
          )}
        </View>
        <View style={styleAnnonceurs.bloc}>
          <Text style={styleAnnonceurs.title}>{ this.props.society }</Text>
          <View style={styleAnnonceurs.contentRow}>
            <Icon 
              name='place'
              type='FontAwesome'
              color={iconColor}
              size={18}
            />          
            <View>
              <Text style={styleAnnonceurs.annonceur}>{ this.props.address }</Text>
              <Text style={styleAnnonceurs.annonceur}>{ this.props.district && this.props.district }</Text>
            </View>

          </View>
          <Text numberOfLines={5} style={styleAnnonceurs.description}>{ this.props.description }</Text>
        </View>
        <View style={{ position: 'absolute', right: 10, bottom: 10 }}>
          <ButtonLight texte={ "en savoir +" } page='AnnonceurSingle' id={this.props.id} />
        </View>
     </View>
    )
  }
}