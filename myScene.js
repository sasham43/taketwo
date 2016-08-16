import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

export default class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{title: 'My Initial Scene', index: 0}}
        renderScene={(route, navigator) => {
          <MyScene
            title={route.title}

            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            onBack={ () =>{
              if (route.index > 0){
                navigator.pop();
              }
            }}
          />
        }}
      />
    );
  }
}

export default class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View>
        <Text>Current Scene {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Touch me to move on</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Touch me to fall back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
