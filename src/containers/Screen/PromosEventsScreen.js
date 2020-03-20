import React from 'react';
import { FlatList, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';
import  MainLayout  from '../../components/Layout/MainLayout';
import { fetchPromos } from '../../actions/promotions';

import PromotionItem from '../../components/PromotionItem';

import NavigationService from '../NavigationService';
import { searchFilter } from '../../actions/filter';

class PromosEventsScreen extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };

	componentDidMount() {
    this.forceUpdate();
    this.props.dispatch(fetchPromos('', '', ''));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categorie !== this.props.categorie || 
      prevProps.event !== this.props.event || 
      prevProps.sort !== this.props.sort) {
      this.props.dispatch(fetchPromos(this.props.categorie, this.props.event, this.props.sort))
    }
  }


  componentWillUnmount() {
    this.props.dispatch(fetchPromos('', '', ''));
    this.props.dispatch(searchFilter(''));
  }


  _renderItem ({item, index}) {
    return (
      <TouchableOpacity
      onPress={() => { NavigationService.navigate("PromoEventSingle", {promoId: item.id}) }}
      >
        <PromotionItem page="list" {...item}  />
      </TouchableOpacity>
    );
  }

  _renderEmpty = () => {
    return (
      <View>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Pas de promotions / événements</Text>
      </View>
    );
  }

  render() {
    if ( this.props.promotions == null ) {
      return ( 
        <MainLayout>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#55bad4" />
          </View>
        </MainLayout>
      )
    }

    return (
      
      <MainLayout search='filtres' typePage="Page" title="Les promos & événements" navigation={this.props.navigation}>
        <FlatList
					data={this.props.promotions}
					renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={this._renderEmpty}
				/>
      </MainLayout> 
    );
  }
}

function mapStateToProps( state ) {
  return {
      promotions: state.promotionReducer.promotionList,
      categorie: state.filterSearchReducer.categorie,
      event : state.eventSearchReducer.event, 
      sort: state.eventSearchReducer.sort
  };
}

export default connect(mapStateToProps)(PromosEventsScreen);