import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity, Platform } from 'react-native';
import {StyleHeader} from '../assets/Style/Components/StyleHeader';
import { ButtonCTA } from './button';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import HTML from 'react-native-render-html';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Dimensions } from 'react-native'; 
import { getSliderHome } from '../actions/home';
import SearchAnnonceur from './SearchHomeAnnonceur';
import { gradiantColor1, gradiantColor2 } from '../assets/Style/variables';

const sliderWidth = Dimensions.get('window').width;

class HeaderHome extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          search: '',
      };
    };

  componentDidMount() {
      this.props.dispatch(getSliderHome());
  }      

  get pagination () {
    const { entries, activeSlide = 0 } = this.state;
    const lenght = this.props.slider.length;
    return (
      <Pagination
        dotsLength={lenght}
        activeDotIndex={activeSlide}
        containerStyle={{ marginTop: -70 }}
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

  _renderItem ({item, index}) {
    return (
      <View style={StyleHeader.slider}>       
        <Image 
        source={item.image == null ? (require('../image/baseImage.jpg')) : {uri : global.baseImg + item.image.image_name}}
        style={{height: 200, width: '100%', opacity: 0.4,}}
        />     
        <View style={{ 
            position: 'absolute', 
            width: "100%",    
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center', 
        }} >
          <Text style={StyleHeader.title}>{item.name}</Text>     
          <View style={StyleHeader.text}>
            <HTML html={item.text} baseFontStyle={{color: '#fff',fontSize: 13,}} />
          </View> 
          {item.link && 
            <TouchableOpacity onPress={()=> Linking.openURL(item.link).catch(err => console.error('An error occurred', err))} style={{ shadowColor: "#1f80cb", shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.2, shadowRadius: 10,}}>
                <ButtonCTA shadow="blue" texte={item.callToAction} />
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }

    
    render() {
        return (

        <View style={{ position: 'relative', zIndex: 5, marginBottom: 20 }}>
          <LinearGradient
          colors={[gradiantColor1, gradiantColor2]}
          start={{x:0.2,y:-0.2}} 
          end={{x:1,y:0.5}}
          style={{backgroundColor: 'transparent', elevation: 2, paddingBottom: 5}}
          >
            <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.props.slider}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            loop
            autoplay
            autoplayDelay={4000}
            autoplayInterval={4000}
            />
            { this.pagination }


            {/* <View style={StyleHeader.searchBar}>
              <Text style={StyleHeader.titleSearch}>Recherche un annonceur</Text>
              <SearchAnnonceur />
            </View> */}
          </LinearGradient> 
        </View> 
      );
    };
};

function mapStateToProps( state ) {
    return {
        slider: state.getSliderHomeReducer
    };
  }

export default connect(mapStateToProps)(HeaderHome);