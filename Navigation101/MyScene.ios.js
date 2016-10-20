import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View>
       <Text style={this.props.scene}>Current Scene: { this.props.title }</Text>
       <TouchableHighlight onPress={this.props.onForward}>
         <Text style={this.props.scene}>Tap me to load the next scene</Text>
       </TouchableHighlight>
       <TouchableHighlight onPress={this.props.onBack}>
         <Text style={this.props.scene}>Tap me to go back</Text>
       </TouchableHighlight>
     </View>
    )
  }
}
