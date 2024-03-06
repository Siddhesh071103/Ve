import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({navigation}) => {
  return (
     <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'white'}}>
        <Text style={{color: 'black', fontWeight: 'bold',fontSize: 30,marginTop: 10}}>
            Let's Get Started!
        </Text>
        <View style={{marginTop: 100}}/>
        <View style={{justifyContent: 'center',flexDirection: 'row'}}>
            <Image style={{width: 300,height: 300}} source={require('../assets/4957136.jpg')}/>
        </View>
        <View style={{marginTop: 50}}/>
          <TouchableOpacity onPress={() => navigation.replace('Register')} style={{ width: 300, height: 50, backgroundColor: '#007FFF',borderRadius: 20}}>
            <Text style={{fontSize: 20,fontWeight: 'bold',marginLeft: 110,marginTop: 6}}>Sign Up</Text>
        </TouchableOpacity>
          <View style={{marginTop: 5,flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{fontWeight:'bold'}}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.replace('Login')}>
                  <Text style={{ color: '#007FFF',fontWeight: 'bold'}}>Log In</Text>
            </TouchableOpacity>
        </View>
     </View>
  )
}

export default Home

const styles = StyleSheet.create({})