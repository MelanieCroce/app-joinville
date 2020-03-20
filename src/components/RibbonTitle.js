import React from 'react';  
import { Text, View, Platform} from 'react-native';

import {styleRibbon} from '../assets/Style/Components/StyleRibbon';
import LinearGradient from 'react-native-linear-gradient'; 

export class RibbonTitle extends React.Component {
  render() {
    return (
      <View style={{ position: 'absolute', zIndex: 5, left: this.props.left, top: this.props.top  }}>
        <View style={[styleRibbon.triangleBack, 
        { borderRightColor: this.props.cornerColor }, 
        (this.props.small ? 
          { 
          ...Platform.select({
            ios: {
              borderLeftWidth: 5, borderBottomWidth: 10, borderRightWidth: 10, top: 18, left: -30
            },
            android: {
              borderRightWidth: 6, borderBottomWidth: 6, borderLeftWidth: 2, top: 24, left: -27
          }} )}
        : {})]}></View>
        <LinearGradient
          colors={this.props.color}
          start={{x:0.2,y:-0.2}} 
          end={{x:1,y:0.5}}
          style={{ position: 'absolute', left: -25, top: -4,}}
        >
          <View style={styleRibbon.ribbonBg}>
            <Text style={[styleRibbon.ribbonText, {color: this.props.textColor}]}>{ this.props.texte }</Text>
          </View>
          <View style={[styleRibbon.triangleAfter, {borderLeftColor: this.props.color[1], borderRightColor: this.props.color[1],} ]}></View>
        </LinearGradient>
      </View>      
    );
  }
}