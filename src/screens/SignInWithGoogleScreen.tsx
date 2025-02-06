import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';
import signInWithGoogle from './Googlesignin'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInWithGoogleScreen = ({signin}) => {

  async function GoogleSignin() {
    try {
      const { email, username } = await signInWithGoogle();
      console.log(email,username,"all")
      await AsyncStorage.setItem('email_id', email)
      await AsyncStorage.setItem('username', username)
      signin(true);
      //console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  console.log("nice ok")
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text style={styles.Appname}>MediScan</Text> */}
      <View style={styles.logoContainer}>
        {/* <View style={styles.logoPlaceholder} /> */}
        <Image source={require('../images/logo.png')}  />
      </View>
      <Text style={styles.assistantText}>Scan prescriptions and medicine wrappers with ease</Text>
      <TouchableOpacity style={styles.button}
        onPress={() => GoogleSignin()}
      >
        <Image source={require('../images/googleLogo.png')}  />
        <Text>Sign in with Google</Text>
      </TouchableOpacity>
      <Text style={styles.assistantText}>We respect your privacy. Your data is safe with us.</Text>

    </View>
  )
}

export default SignInWithGoogleScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  logoContainer: {
    marginBottom: 20,
  },
  Appname: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 60,
  },
  assistantText: {
    color: 'gray',
    fontSize: 14,
  },
  button: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 10,
    width: width * 0.8,
    alignItems: 'center',
    marginTop: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    flexDirection: 'row',
    marginBottom: 10,
    //  elevation:3,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 20,
  },
})