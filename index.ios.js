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
  View
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText:true};

    // toggle once a second
    setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : this.props.text;
    return(
      <Text>{display}</Text>
    );
  }
}

class taketwo extends Component {
  render() {
    return (
      <View>
        <Text style={styles.valkyries} text='I love to blink'>{this.props.text} </Text>
        <Text style={styles.charlies} text='Yes blinking is so great' > {this.props.text}</Text>
        <Text style={styles.valkyries} text='Why did they ever take this out of HTML' > {this.props.text}</Text>
        <Text style={styles.charlies} text='Look at me look at me look at me' > {this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  charlies: {
    backgroundColor: '#04eeaa',
    color: '#ffffff'
  },
  valkyries:{
    backgroundColor: '#333',
    color: '#04eeaa'
  }
})

AppRegistry.registerComponent('taketwo', () => taketwo);
