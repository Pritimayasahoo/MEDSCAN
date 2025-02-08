import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import AppBar from "../Header/AppBar";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";


const MyProfileScreen = ({ navigation }: any) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");

  
  useEffect(()=>{
       async function getprofile() {
         const username = await AsyncStorage.getItem('username');
         const userEmail = await AsyncStorage.getItem("email_id")
         const userprofile = await AsyncStorage.getItem('profileImage')
         setName(username)
         setEmail(userEmail)
         setProfileImage(userprofile)
       }
       getprofile()
  },[])

  
  
  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} title={'My Profile'} backgroundColor={undefined} />

      <View style={styles.body}>

        {/* Profile Image with Edit Icon */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <TouchableOpacity style={styles.editIcon}>
            <Image source={require("../images/camera.png")} style={styles.editImage} />
          </TouchableOpacity>
        </View>

        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
         <Text style={styles.input}>{name}</Text>

        {/* Email Input */}
        <Text style={styles.label}>Email</Text>
        <Text style={styles.input}>{email}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    padding: 20,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 3,
  },
  editImage: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    //marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default MyProfileScreen;
