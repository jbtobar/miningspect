/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Button from '../components/Button'

export default class SignInScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Registrar Credenciales',
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>SignInScreen</Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    )
  }
}
