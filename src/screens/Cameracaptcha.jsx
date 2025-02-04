import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Alert } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ImageCropPicker from "react-native-image-crop-picker";
import { request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { Platform } from "react-native";

export const Pickimage = (setImage) => {

    // Function to request Camera Permission
    const requestCameraPermission = async () => {
        const permission =
            Platform.OS === "android"
                ? PERMISSIONS.ANDROID.CAMERA
                : PERMISSIONS.IOS.CAMERA;

        const result = await request(permission);

        if (result === RESULTS.GRANTED) {
            openCamera();
        } else {
            Alert.alert("Permission Denied", "Camera access is required to take photos.");
        }
    };



    // Function to request Gallery Permission (only needed for Android 13+)
    const requestGalleryPermission = async () => {
        if (Platform.OS === "android") {
            const permission = PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
            const result = await request(permission);

            if (result === RESULTS.GRANTED) {
                openGallery();
            } else {
                Alert.alert("Permission Denied", "Gallery access is required to pick images.");
            }
        } else {
            openGallery();
        }
    };



    // Function to Open Camera
    const openCamera = () => {
        launchCamera(
            { mediaType: "photo", cameraType: "back", quality: 1 },
            (response) => {
                if (!response.didCancel && response.assets) {
                    cropImage(response.assets[0].uri, setImage);
                }
            }
        );
    };



    // Function to Open Gallery
    const openGallery = () => {
        launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
            if (!response.didCancel && response.assets) {
                cropImage(response.assets[0].uri);
            }
        });
    };



    
    requestCameraPermission()

    // return (
    //     <View style={styles.container}>
    //         <Button title="Open Camera" onPress={requestCameraPermission} />
    //         <Button title="Pick from Gallery" onPress={requestGalleryPermission} />
    //         {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    //     </View>
    // );
};

// const styles = StyleSheet.create({
//     container: { flex: 1, alignItems: "center", justifyContent: "center" },
//     image: { width: 300, height: 400, marginTop: 20, borderRadius: 10 },
// });


// Function to Crop & Rotate Image
export const cropImage = (uri, setImage) => {
    ImageCropPicker.openCropper({
        path: uri,
        width: 300,
        height: 400,
        freeStyleCropEnabled: true, // User can freely adjust the crop
        rotateClockwise: true,
    })
        .then((image) => {
            console.log(image, "get it")
            console.log(image.path, "new one");
            setImage(image.path);
            //setImageUri(image.path);
        })
        .catch((error) => {
            console.log("Crop Error:", error);
        });
};



