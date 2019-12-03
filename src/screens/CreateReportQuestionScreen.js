/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import React from 'react'
import { View, Text } from 'react-native'
import Button from 'src/components/Button'

// const questionTree = {
//   "Invasion de Territorio (Activa)":{
//
//   },
//   "Irregularidad Ambiental":{
//
//   }
// }

export default class CreateReportQuestionScreen extends React.PureComponent {
  static navigationOptions = {
    title:'Categoria de Reporte'
  }
  componentDidMount() {

  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'space-evenly',alignItems:'center'}}>
        <Button title="Invasion de Territorio"/>
        <Button title="Irregularidad Ambiental"/>
      </View>
    )
  }
}
