/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import React from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button'

export default class HomeScreen extends React.PureComponent {
  _onPress = () => {
    alert('reporte')
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>HomeScreen</Text>
        <Button title="Crear Reporte" onPress={this._onPress}/>
      </View>
    )
  }
}
