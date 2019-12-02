/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import React from 'react'
import {
  View,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  Text
 } from 'react-native'

export default class AuthLoadingScreen extends React.PureComponent {

  componentDidMount() {
    this._bootstrapAsync()
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>AuthLoadingScreen</Text>
      </View>
    )
  }
}
