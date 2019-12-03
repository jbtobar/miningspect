/**
 * Code written by and belongs to Juan Bernardo Tobar <jbtobar>
 * jbtobar.io@gmail.com
 * @format
 * @flow
 * @author Juan Bernardo Tobar <jbtobar.io@gmail.com>
 */
import React from 'react'
import { View, Text,FlatList } from 'react-native'
import Button from 'src/components/Button'


const questionDescriptions = {
  INVASION_TERRITORIO:'Se ve evidencia de invasion activa o pasada?',
  ACTIVA:'Existen invasores presentes en el momento?',
  PASADA:'Existe evidencia de invasores - pero no estan presentes',
  IRREGULARIDAD_AMBIENTAL:'Se ve algo fuera de lo normal en el medio ambiente?',
  MAQUINARIA_PESADA:'Se puede ver maquinaria pesada?',
  SIN_MAQUINARIA_PESADA:'No se puede ver maquinaria pesada?'
}

// const numeroAproxDePersonas = Object.assign({}, [...Array(100).keys()].map(d => String(d))).map(d => )
function personsArray() {
  let numa = { ...[...Array(100).keys()] }
  for (i in numa) {
    numa[i] = {};
  }
  return numa
}
const numeroAproxDePersonas = personsArray()
console.warn(numeroAproxDePersonas)

const hayDanoAmbiental = {
  'HAY_DANO_AMBIENTAL':numeroAproxDePersonas,
  'NO_HAY_DANO_AMBIENTAL':numeroAproxDePersonas
}
const hayMenoresDeEdad = {
  'HAY_MENORES_DE_EDAD':hayDanoAmbiental,
  'NO_HAY_MENORES_DE_EDAD':hayDanoAmbiental
}


const questionTree = {
  "INVASION_TERRITORIO": {
    "ACTIVA":{
      "MAQUINARIA_PESADA":hayMenoresDeEdad,
      "SIN_MAQUINARIA_PESADA":hayMenoresDeEdad,
    },
    "PASADA":{
      "MAQUINARIA_PESADA":hayDanoAmbiental,
      "SIN_MAQUINARIA_PESADA":hayDanoAmbiental,
    }
  },
  "IRREGULARIDAD_AMBIENTAL":hayDanoAmbiental,
}





function searchTree(treeData,matchingTitle) {
  //if matching title is direct child of treeData
  // if (treeData[matchingTitle]) console.log('yeah',treeData[matchingTitle])
  if (treeData[matchingTitle]) return Object.keys(treeData[matchingTitle])
  else {
    result = null
    for (key in treeData) {
      result = searchTree(treeData[key],matchingTitle)
      if (result) return result
      // console.log({result})
    }

    return null
  }
  // return null
}



export default class CreateReportQuestionScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) =>({
    title:navigation.getParam('selectedItem','Categoria de Reporte')
  })
  state = {
    data:[]
  }
  componentDidMount() {
    const item = this.props.navigation.getParam('selectedItem',null)
    this.setState({data:item ? searchTree(questionTree,item) : Object.keys(questionTree)})
  }
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item,ix) => String(ix)}
          renderItem={({item}) =>
            <Button
              title={item.replace(/_/g,' ')}
              subtitle={questionDescriptions[item] || ''}
              style={{marginVertical:10}}
              onPress={() => this.props.navigation.push('CreateReportQuestion',{selectedItem:item})}/>
          }
        />
      </View>
    )
  }
}
