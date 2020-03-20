import React from 'react';
import {connect} from 'react-redux';
import { Text, Image, View, ActivityIndicator } from 'react-native';
import MainLayout from '../../components/Layout/MainLayout';
import {styleAbout} from '../../assets/Style/Screen/StyleCGU';
import { fetchCGU } from '../../actions/contentAbout';
import HTML from 'react-native-render-html';

function mapStateToProps( state ) {
  return {
    cgu: state.contentCGUReducer,
  };
}


class CGUScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };  

	componentDidMount() {
    const action = fetchCGU();
    this.props.dispatch( action );
  }
  
  render() {
    if ( this.props.cgu.cgu == null ) {
      return ( 
        <MainLayout>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#55bad4" />
          </View>
        </MainLayout>
      )
    }    
    const cgu = this.props.cgu.cgu;    
      return (
        <MainLayout title="CGU" navigation={this.props.navigation}>
          <View style={styleAbout.content}>
            <Text style={styleAbout.title}>{cgu.name}</Text>
            <View >
              <HTML html={cgu.text} style={styleAbout.text} />
            </View>              
          </View>

        </MainLayout> 
      );
  };
};

export default connect(mapStateToProps)(CGUScreen);