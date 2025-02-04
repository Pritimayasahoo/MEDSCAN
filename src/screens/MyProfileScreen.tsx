import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import AppBar from "../Header/AppBar";
import { useNavigation } from '@react-navigation/native'


const MyProfileScreen = ({ navigation }: any) => {
  const [name, setName] = useState("Sarah Doe");
  const [email, setEmail] = useState("sarahdoe@gmail.com");

  return (
    <View style={styles.container}>
      <AppBar navigation={navigation} title={'My Profile'} backgroundColor={undefined} />

      <View style={styles.body}>

        {/* Profile Image with Edit Icon */}
        <View style={styles.imageContainer}>
          <Image source={require("../images/profileImg.png")} style={styles.profileImage} />
          <TouchableOpacity style={styles.editIcon}>
            <Image source={require("../images/camera.png")} style={styles.editImage} />
          </TouchableOpacity>
        </View>

        {/* Name Input */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        {/* Email Input */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
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
    marginBottom: 5,
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
