import { StyleSheet, Text, View, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Screen = ({navigation}) => {
  return (
    <ImageBackground color='white' resizeMode="cover" style={styles.set}>
    <View style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: 20,
    }}>
          <View style={{
              width: 350,
              flexDirection: 'row',
              gap: 5,
              backgroundColor: "white",
              paddingVertical: 10,
              borderRadius: 5,
              marginTop: 30,
              borderColor: '#007FFF',
              borderWidth: 2,
}}>
              <FontAwesome style={{marginLeft: 10, flex: 1,alignItems: 'center'}} name="search" size={25} color="black" />
        <TextInput 
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder='Search'
                  placeholderTextColor={'grey'}
                  style={{
                      marginLeft: 8,
                      color: "black",
                      marginVertical: 5,
                      width: 300,
                  }}
        />
    </View>
    </View>
      <Pressable style={{ flex: 1, bottom: 0,position: 'absolute', justifyContent: 'flex-end',marginBottom: 10, alignItems: 'center', width: '100%', height: 50, backgroundColor: '#007FFF',borderRadius: 20}}>
    <TouchableOpacity 
          onPress={() => navigation.replace('Profile')}
    style={{marginRight: 200, marginBottom: -30}}>
          <AntDesign name="profile" size={30} color="white" />
    </TouchableOpacity>
    <TouchableOpacity 
          onPress={() => navigation.replace('Settings')}
    style={{ marginLeft: 200,marginBottom: -35 }}>
          <Feather name="settings" size={30} color="white" />
    </TouchableOpacity>
    <TouchableOpacity 
          onPress={() => navigation.replace('Additional')}
    style={{ marginBottom: 8 }}>
          <Ionicons name="add-circle-outline" size={35} color="white" />
    </TouchableOpacity>
  </Pressable>
    </ImageBackground>
  )
}

export default Screen

const styles = StyleSheet.create({
    set: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
    },
})