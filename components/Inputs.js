import { View, Text,TextInput } from 'react-native'
import React,{useState} from 'react'
import style from './style'

export default function Inputs() {
    const [value, setValue] = useState()
    const getValue = (text) =>{
        setValue(text)
    }
  return (
    <View>
     <TextInput style={style.input}
     placeholder="Digite algo..."
     onChangeText={getValue}
     />
     <Text>{value}</Text>
    </View>
  )
}