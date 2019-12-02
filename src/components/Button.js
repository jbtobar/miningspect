/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default class Button extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}
