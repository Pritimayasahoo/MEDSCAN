import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const signInWithGoogle = async () => {
      console.log("sign in start")
      GoogleSignin.configure({
        webClientId: "202485170107-56rohr9f5p2icdtvp8a7b46flv8cshsc.apps.googleusercontent.com",
        offlineAccess: true,
        scopes: ['profile', 'email'],
        forceCodeForRefreshToken: true,
      });

      await GoogleSignin.hasPlayServices();
      const { data } = await GoogleSignin.signIn();
      const { idToken }=data
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      // Grab the user's name after successful login
      const user = userCredential.user;
      const email = user.email;
      console.log("Name:", user.displayName);
      console.log("Email:", user.email);  // ✅ Get Email ID
          
      console.log("Login successful");

      return email
    
  };

  
  export default signInWithGoogle


