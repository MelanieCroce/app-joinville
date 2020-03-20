import React from 'react';
import { TextInput,View, TouchableOpacity, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import NavigationService from '../containers/NavigationService';
import { searchAnnonceur, fetchAnnonceurs } from '../actions/annonceurs';
import { ButtonCTA } from './button';
import { styleSearch } from '../assets/Style/Components/StyleSearch';
import {iconSearchColor} from '../assets/Style/variables';

class SearchAnnonceur extends React.Component { 
  componentDidMount() {
    this.props.dispatch( searchAnnonceur(this.props.search) );
}

  _searchInput = props => {
    const { input, ...inputProps } = props;
    return (
      <View>
        <View style={styleSearch.input}>
          <TextInput
            placeholder={inputProps.placeholder}
            placeholderTextColor={iconSearchColor}
            selectTextOnFocus
            style={{ marginLeft: 5, fontSize: 14, fontFamily: 'Montserrat-Regular' }}
            defaultValue={this.props.search}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={input.onChange}
            blurOnSubmit={true}
            onSubmitEditing={() => { 
              if (input.value == "") this.props.dispatch(fetchAnnonceurs('', ''));
              this.props.dispatch(searchAnnonceur(input.value));
            }}
            {...inputProps}
            hitSlop={{top: 50, left: 50, right: 50, bottom: 50} }
          />
          <View style={ [ {position: 'absolute', right: 15, top: 8 } ]}>
            <TouchableOpacity onPress={ () => {
              if (input.value == "") this.props.dispatch(fetchAnnonceurs('', ''));
              this.props.dispatch(searchAnnonceur(input.value));
              this.props.popupclose()     
            } }>
              <Icon
                name="search"
                size={20} 
                color={iconSearchColor}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity  onPress={ () => { 
          if (input.value == "") this.props.dispatch(fetchAnnonceurs('', ''));
          this.props.dispatch(searchAnnonceur(input.value));
          this.props.popupclose()   
        } }>
          <ButtonCTA large texte="Recherche" />
        </TouchableOpacity>
      </View>
    )    
  }


  render() {
    return (
      <View keyboardShouldPersistTaps={'handled'}>
        <Field
          name={'search'}
          placeholder={'Search'}
          component={this._searchInput}
        />
      </View>
    );
  }
}

function mapStateToProps( state ) {
  return {
    search: state.searchAnnonceurReducer.search
  };
}


SearchAnnonceur = connect(
  mapStateToProps,
)(SearchAnnonceur);


export default reduxForm({ form: 'Searchannonceur' })(SearchAnnonceur);