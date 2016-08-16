/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  ListView,
  Navigator,
  View
} from 'react-native';

import SimpleNavigationApp from './myScene';

class YoDawgApp extends Component {
  render() {
  return (
    <SimpleNavigationApp/>
  );
}
}

AppRegistry.registerComponent('taketwo', () => YoDawgApp);
