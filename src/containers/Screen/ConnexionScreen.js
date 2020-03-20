import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';

export default class ConnexionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };  
  render() {
      return (
        <MainLayout typePage="Connexion" title="Connexion" navigation={this.props.navigation}>
        </MainLayout> 
      );
  };
};
