/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import React from 'react'
import { View, Text, Image,TextInput } from 'react-native'
import Button from '../components/Button'
import ImagePicker from 'react-native-image-picker';
import { width, height } from 'src/generalStyles'
import { uploadReport } from 'src/utils/api'

const options = {
  title: 'Seleccionar Imagen',
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

export default class CreateReportScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Nuevo Reporte',
  }
  state = {
    avatarSource:null,
    text:''
  }
  _pickImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      // console.warn('Response = ', response);

      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // console.warn('User tapped custom button: ', response.customButton);
      } else {
        // const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          photo:response,
          // avatarSource: source,
        });
      }
    })
  }
  _onPressNext = () => {

    // const uri = this.state.image;
    // const uriParts = uri.split('.');
    // const fileType = uriParts[uriParts.length - 1];

    uploadReport({photo:this.state.photo,text:this.state.text},res => {
      if (res.status == 'OK') {
        this.props.navigation.navigate('CreateReportQuestion')
      }
    })
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image source={this.state.photo?{uri:this.state.photo.uri}:null} style={{width,height:height/2}} />
        {
          this.state.photo ?
            <View style={{flex:1,backgroundColor:'yellow',width}}>
            <TextInput
              multiline={true}
              placeholder="Un breve comentario..."
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              style={{flex:1,borderColor:'grey',borderWidth:1}}
              />
            {
              this.state.text == '' ?
                null
                :
              <Button title="Siguiente" onPress={this._onPressNext}/>
            }
            </View>
            :
          <Button title="Seleccionar Imagen" onPress={this._pickImage}/>
        }
      </View>
    )
  }
}
