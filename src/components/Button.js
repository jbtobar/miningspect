/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { getPlatformElevation } from '../utils/elevation'

export default class Button extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'blue',
          padding:20,
          borderRadius:2,
          ...getPlatformElevation(10)
          }}>
        <Text style={{color:'white'}}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}
