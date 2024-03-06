import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
    return (<
        Redirect href="./app/register.js" />
    )
}

export default index

const styles = StyleSheet.create({})