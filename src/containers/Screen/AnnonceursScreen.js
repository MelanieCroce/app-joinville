import React from 'react';
import { FlatList, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';
import  MainLayout  from '../../components/Layout/MainLayout';
import { fetchAnnonceurs } from '../../actions/annonceurs';

import AnnonceursItem from '../../components/AnnonceursItem';

import NavigationService from '../NavigationService';
import { searchFilter } from '../../actions/filter';

class AnnonceursScreen extends React.PureComponent  {
  static navigationOptions = {
    header: null,
  };

	componentDidMount() {
    this.forceUpdate();
    this.props.dispatch(fetchAnnonceurs('', ''));
}

componentDidUpdate(prevProps, prevState) {
  if (prevProps.categorie !== this.props.categorie || 
    prevProps.search !== this.props.search ) {
    this.props.dispatch(fetchAnnonceurs(this.props.categorie, this.props.search));
  }
}

componentWillUnmount() {
  this.props.dispatch(fetchAnnonceurs('', ''));
  this.props.dispatch(searchFilter(''));
}

_renderEmpty = () => {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>Pas d'annonceurs</Text>
    </View>
  );
}
  render() {
    if ( this.props.annonceurs == null ) {
      return ( 
        <MainLayout>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#55bad4" />
          </View>
        </MainLayout>
      )
    }
    return (
      <MainLayout search typePage="Page" title="Les professionnels" navigation={this.props.navigation}>
        <FlatList
					data={this.props.annonceurs}
					renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => { NavigationService.navigate("AnnonceurSingle", annonceurId = item.id ) }}
            >
              <AnnonceursItem page="list" { ...item } />
            </TouchableOpacity>
					)}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={this._renderEmpty}
				/>
      </MainLayout> 
    );
  }
}

function mapStateToProps( state ) {
  return {
      annonceurs: state.annonceurReducer.annonceurList,
      categorie: state.filterSearchReducer.categorie,
      search: state.searchAnnonceurReducer.search
  };
}

export default connect(mapStateToProps)(AnnonceursScreen);