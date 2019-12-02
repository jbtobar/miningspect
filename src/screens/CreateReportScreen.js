/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import React from 'react'
import { View, Text } from 'react-native'

export default class CreateReportScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Nuevo Reporte',
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>CreateReportScreen</Text>
      </View>
    )
  }
}
