import React from 'react';  
import { Text, TouchableOpacity, Button, View } from 'react-native';
import NavigationService from '../containers/NavigationService';
import { Icon } from 'react-native-elements';

import {stylesButton} from '../assets/Style/Components/StyleButton';
import LinearGradient from 'react-native-linear-gradient'; 

import { gradiantColor1, gradiantColor2, buttonGradiantColor1, buttonGradiantColor2 } from '../assets/Style/variables';

export class ButtonCTA extends React.Component {
  render() {
    return ( 
      <View>
        {this.props.page ? (
        <TouchableOpacity 
          onPress={() => { NavigationService.navigate(this.props.page, id =  this.props.id) }}
          style={[stylesButton.cta, 
            (this.props.large ? { width: '100%', elevation : 4 } : {}), 
            (this.props.shadow ? { shadowColor: '#1f80cb' } : { shadowColor: '#000000' })
          ]}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <LinearGradient
          colors={this.props.color ? ( this.props.color ) : ( [gradiantColor1, gradiantColor2] ) }
          start={{x:1,y:1}} 
          end={{x:0,y:0}} 
          style={[
            {paddingHorizontal: 20,},
            (this.props.large ? { paddingVertical: 5 } : {}), 
            (this.props.medium ? { borderRadius: 50, paddingHorizontal: 10 } : {borderRadius: 20}), 
          ]} 
          >
            <Text style={[stylesButton.textCta, 
              (this.props.large ? { fontSize: 15 } : {}),
              (this.props.medium ? { fontSize: 13 } : {})
            ]}>{this.props.texte}</Text>
          </LinearGradient>
        </TouchableOpacity>

        ) : (
        
          <LinearGradient
          colors={this.props.color ? ( this.props.color ) : ( [buttonGradiantColor1, buttonGradiantColor2] ) }
          start={{x:1,y:1}} 
          end={{x:0,y:0}} 
          style={[stylesButton.cta, 
            {paddingHorizontal: 20,},
            (this.props.large ? { paddingVertical: 5, width: '100%', elevation: 4, backgroundColor: 'transparent' } : {}), 
            (this.props.medium ? { borderRadius: 50, paddingHorizontal: 10 } : {borderRadius: 20}),
          ]}   
          >
            <Text style={[stylesButton.textCta, 
              (this.props.large ? { fontSize: 15 } : {}),
              (this.props.medium ? { fontSize: 13 } : {})
            ]}>{this.props.texte}</Text>
          </LinearGradient>
        )}
      </View>
    );
  }
}

export class ButtonConnexion extends React.Component {
  render() {
    return ( 
      <View
        hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
        <Text style={stylesButton.textLogin}>{this.props.texte}</Text>
    </View>
    );
  }
}

export class ButtonLight extends React.Component {
  _navigate = (page,id) => {
    if(id != null){
      NavigationService.navigate(page, annonceurId = id)
    }
    NavigationService.navigate(page)
  }
  render() {
    return ( 
      <View>
        {this.props.page ? (
          <TouchableOpacity 
          onPress={() => { this._navigate(this.props.page,this.props.id) }}
          style={stylesButton.light}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={stylesButton.textLight}>{this.props.texte}</Text>
        </TouchableOpacity>
        ) : (
          <View style={stylesButton.light}>
            <Text style={stylesButton.textLight}>{this.props.texte}</Text>
          </View>
        )}

      </View>
    );
  }
}

export class ButtonRound extends React.Component {
  render() {
    return ( 
        <LinearGradient
        colors={[buttonGradiantColor1, buttonGradiantColor2]}
        start={{x:1,y:1}} 
        end={{x:0,y:0}} 
        style={stylesButton.round}
        >
        <Icon
          name={this.props.icon}
          color={this.props.color} 
          size={25}
        />
      </LinearGradient>
    );
  }
}

export class ButtonSquare extends React.Component {
  render() {
    return ( 
        <LinearGradient
        colors={[buttonGradiantColor1, buttonGradiantColor2]}
        start={{x:1,y:1}} 
        end={{x:0,y:0}} 
        style={stylesButton.square}
        >
        <Icon
          name={this.props.icon}
          type="font-awesome"
          color={this.props.color} 
          size={20}
        />
      </LinearGradient>
    );
  }
}

export class ButtonAlert extends React.Component {
  render() {
    return ( 
      <LinearGradient
      colors={this.props.color ? ( this.props.color ) : ( [buttonGradiantColor1, buttonGradiantColor2] ) }
      start={{x:1,y:1}} 
      end={{x:0,y:0}} 
      style={stylesButton.alert} 
      >
        <Text style={stylesButton.textAlert}>{this.props.texte}</Text>
      </LinearGradient>
    );
  }
}
