import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {StyleFilter} from '../assets/Style/Components/StyleFilter';
import { fetchFilter, searchFilter } from '../actions/filter';
import {iconColor} from '../assets/Style/variables';

class FilterItem extends React.PureComponent  {
  _onPress = () => {
    this.props.onPressItem(this.props.id);

  };

  render() {
    const buttonColor = this.props.selected == 'selected' ? "white" : "transparent";
    const buttonTextColor = this.props.selected == 'selected' ? iconColor : "white";   
    return (
      <TouchableOpacity onPress={this._onPress} style={[
        StyleFilter.filter, 
        {backgroundColor: buttonColor}
      ]}  >
        <Text 
          style={{ color: "#fff", fontSize: 14, color: buttonTextColor}}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}

class Filter extends React.PureComponent  {
  constructor(props) {
    super(props);
    this.state = {
        selected: ''
    };
  };


  _onPressItem(id) {
    if (this.state.selected !== null && this.state.selected == id) {
      this.setState({selected: ''})
      this.props.dispatch(searchFilter());
    }
    else {
      this.props.dispatch(searchFilter(id));
      this.setState({selected: id});      
    }
  };   

  
  componentDidMount() {
    this.props.dispatch(fetchFilter());
    this.props.dispatch(searchFilter());
  }

  render() {
    return (
      <View style={StyleFilter.ListFilter}>
        <FlatList 
          showsHorizontalScrollIndicator={false}
          horizontal
          extraData={this.state}
          data={this.props.filterCategory}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <FilterItem
              id={item.id}
              onPressItem={this._onPressItem.bind(this, item.id)}
              selected={(this.state.selected == item.id ? 'selected' : '' )}
              title={item.name}
            />
          )} />
      </View>
    )
  }
}


function mapStateToProps( state ) {
  return {
    filterCategory: state.filterReducer.filterCategory,
    categorie: state.filterSearchReducer.categorie
  };
}


export default connect(mapStateToProps)(Filter);