import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import NavigationService from './src/containers/NavigationService';
import {DrawerNavigator} from './src/containers/Navigator';


import configureStore from './src/store';
import  { Provider } from 'react-redux';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <DrawerNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      
      </Provider>
    );
  }
}
