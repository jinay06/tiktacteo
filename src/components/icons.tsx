import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type Iconsprops = PropsWithChildren<{
    name: string
}>

const Icons = ({ name }: Iconsprops) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={35} color="#67E6DC" />
            break;
        case 'cross':
            return <Icon name="times" size={35} color="#26ae60" />
            break;

        default:
            return <Icon name="pencil" size={35} color="#FFFFFF" />
            break;
    }
}

export default Icons

const styles = StyleSheet.create({})