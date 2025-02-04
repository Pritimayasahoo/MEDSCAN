import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import colors from '../styles/colors';
import AppBar from '../Header/AppBar';
import { useNavigation } from '@react-navigation/native';

const ImagePreviewScreen = () => {
        const navigation = useNavigation();
    
    const [imageUri, setImageUri] = useState(null);

    // Function to pick an image
    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                Alert.alert('Cancelled', 'Image selection was cancelled');
            } else if (response.errorMessage) {
                Alert.alert('Error', response.errorMessage);
            } else {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} title={'Image Preview'} backgroundColor={undefined} />
            <View style={styles.body}>
            <Text style={styles.title}>Ensure the image is clear and all details are visible.</Text>

            {/* Image Preview */}
            <View style={styles.imageContainer}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <TouchableOpacity style={styles.placeholder} onPress={pickImage}>
                        <Text style={styles.placeholderText}>Tap to upload an image</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={pickImage}>
                    <Text style={styles.buttonText}>Retake</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.proceedButton]}
                    onPress={() => Alert.alert('Proceeding with uploaded image')}
                >
                    <Text style={styles.buttonText}>Proceed</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

export default ImagePreviewScreen;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:10,
        // paddingHorizontal: 20,
    },
    body:{
        alignItems: 'center',
        justifyContent: 'center',
            flex:1
        },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    imageContainer: {
        width: '100%',
        height: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    placeholder: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',
    },
    placeholderText: {
        fontSize: 14,
        color: '#777',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    button: {
        flex: 1,
        padding: 15,
        marginHorizontal: 10,
        backgroundColor: colors.brand_primary,
        borderRadius: 5,
        alignItems: 'center',
    },
    proceedButton: {
        backgroundColor: colors.brand_primary,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});