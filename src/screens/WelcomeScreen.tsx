import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            {/* <View style={styles.logoPlaceholder} /> */}
            <Image source={require('../images/logo.png')}/>
          </View>
          <Text style={styles.title}>MedScan</Text>
          <Text style={styles.subtitle}>
            Extract details from prescriptions & medicine wrappers in seconds.
          </Text>
          <TouchableOpacity style={styles.button}
          onPress={()=>navigation.navigate('SignInWithGoogleScreen')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      );
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5393f8",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      },
      logoContainer: {
        marginBottom: 20,
      },
      logoPlaceholder: {
        width: 80,
        height: 80,
        backgroundColor: "#D3D3D3",
        borderRadius: 10,
      },
      title: {
        fontSize: 26,
        fontWeight: "800",
        color: "white",
        // marginTop: 10,
        fontFamily:'Poppins-bold',
      },
      subtitle: {
        fontSize: 14,
        color: "#ffffff",
        textAlign: "center",
        marginTop: 5,
        marginBottom: 20,
      },
      button: {
        backgroundColor: "#ffffff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
      },
      buttonText: {
        color: "#1E62D0",
        fontSize: 16,
        fontWeight: "bold",
      },
})