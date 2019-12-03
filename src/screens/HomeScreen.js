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
    this.props.navigation.navigate('CreateReport')
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Button title="Crear Reporte" onPress={this._onPress}/>
      </View>
    )
  }
}
