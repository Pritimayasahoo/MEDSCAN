import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import signInWithGoogle from './Googlesignin'
const Login = () => {
  return (
    <View>
      <Pressable onPress={signInWithGoogle} style={styles.bt}>
        <Text>Login</Text>
      </Pressable>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    bt:{
        backgroundColor:"red",
        allignitems:"center",
        justifyContent:"center"
    }
})