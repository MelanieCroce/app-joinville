import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';
import {styleEspaceAnnonceur} from '../../assets/Style/Screen/StyleEspaceAnnonceur';
import { fetchUsers } from '../../actions/EspaceAnnonceur/espaceAnnonceur';

class HeaderEspaceAnnonceur extends React.Component {

  componentDidMount() {
    this.props.dispatch( fetchUsers() );
  }

  render() {
    if ( this.props.users == null ) {
      return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#55bad4" />
          </View>
      )
    }
    return (
      <View>
        <Text style={styleEspaceAnnonceur.title}>
          <Text style={{ fontStyle: 'italic', marginRight: 25, fontSize: 15 }}>Bonjour </Text> 
          <Text>{this.props.users[0].username}</Text>       
        </Text>
        <Text style={styleEspaceAnnonceur.subTitle}>{this.props.title}</Text> 
      </View>
    );
  };
};


function mapStateToProps( state ) {
  return {
    users: state.EspaceAnnonceurReducer
  };
}

export default connect(mapStateToProps)(HeaderEspaceAnnonceur);