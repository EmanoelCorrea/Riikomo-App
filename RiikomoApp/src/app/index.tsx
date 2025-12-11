import React from 'react'
import {View,Text} from 'react-native'
import { style } from './styles'

export default function AppRiikomo(){
    return(
        <View style={style.conteiner}>
            <Text style={style.text}>
                Olá,mundico!!!
            </Text>
        </View>
    )
}