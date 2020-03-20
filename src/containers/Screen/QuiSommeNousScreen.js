import React from 'react';
import { Text, Image, View, ActivityIndicator } from 'react-native';
import MainLayout from '../../components/Layout/MainLayout';
import { ButtonCTA } from '../../components/button';
import {styleAbout} from '../../assets/Style/Screen/StyleAbout';
import {connect} from 'react-redux';
import { fetchAbout } from '../../actions/contentAbout';
import HTML from 'react-native-render-html';

function mapStateToProps( state ) {
  return {
    about: state.contentAboutReducer,
  };
}

class QuiSommesNousScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };  

	componentDidMount() {
    const action = fetchAbout();
    this.props.dispatch( action );
  }

  render() {
    
    if ( this.props.about.about == null ) {
      return ( 
        <MainLayout>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#55bad4" />
          </View>
        </MainLayout>
      )
    }    
    const about = this.props.about.about;
    return (
      <MainLayout title="Qui Sommes-Nous ?" navigation={this.props.navigation}>
        <View style={styleAbout.content}>
          <Text style={styleAbout.title}>{about.name}</Text>
          {about.image && 
            <Image 
            source={about.image == null ? (require('../../image/baseImage.jpg')) : {uri : global.baseImg + about.image.image_name}}
            style={styleAbout.image} />
           }
          <View style={styleAbout.text}>
            <HTML html={about.text} style={styleAbout.text} />
          </View>
          <ButtonCTA page={ "CGU" }  texte={ "Voir CGU" } large /> 
        </View>

      </MainLayout> 
    );
  };
};

export default connect(mapStateToProps)(QuiSommesNousScreen);